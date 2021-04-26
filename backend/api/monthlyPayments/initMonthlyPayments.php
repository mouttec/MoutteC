<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/MonthlyPayments.php";
include_once "../../models/DailyPayments.php";
include_once "../../models/Customer.php";
include_once "../../models/Booking.php";
include_once "../../models/Partner"


$db = new Database();
$conn = $db->connect();
$monthlyPayments = new MonthlyPayment($conn);
$dailyPayment = new DailyPayments($conn);
$customer = new Customer($conn);
$booking = new Booking($conn);
$partner = new Partner($conn);

$monthConcerned = date('m')-1;
$yearConcerned = date('Y', strtotime('-15 days'));
$payments = $dailyPayment->listPaymentsByMonth($monthConcerned, $yearConcerned);
$counter = $payments->rowCount();
if ($counter > 0) {
    $payments_array = array();
    while($row = $payments->fetch()) {
        extract($row);
        //L'array $payments_array ne va comprendre que les payments à destination des partners
        if ($originBooking == "partner") {
        	$customer->idCustomer = $idCustomer;
        	$thisCustomer = $customer->searchCustomerById($customer);
        	$booking->idBooking = $idBooking;
        	$thisBooking = $booking->searchBookingById($booking);
        	$partner->idPartner = $idPartner;
        	$thisPartner = $partner->searchPartnerById($partner);
	        $payment_item = [
	            "idDailyPayment" => $idDailyPayment,
	            "thisPartner" => $thisPartner,
	            "priceDailyPayment" => $priceDailyPayment,
	            "thisBooking" => $thisBooking,
	            "thisCustomer" => $thisCustomer
	        ];
	        array_push($payments_array, $payment_item);
    	}
    }
}

$invoiceLines = array();
for ($p = 0; $p < count($payments_array); $p++) {
	if ((current($payments_array)['idPartner'] != $actualPartner) && ($p > 0)) {
		//PDF
		$pdfFileName = $actualPartner.'_'.$monthConcerned.$yearConcerned;
		//BDD
		$monthlyPayment->idPartner = $actualPartner;
		$monthlyPayment->statusMonthlyPayment = 'En attente';
		$monthlyPayment->dateMonthlyPayment = $monthConcerned.$yearConcerned;
		$monthlyPayment->urlMonthlyPayment = "home/".$yearConcerned."/".$monthConcerned."/".$monthlyPayment->idPartner.'/'.$pdfFileName;
		$monthlyPayment->invoiceLines = $invoiceLines;
		$monthlyPayment->invoiceAmount = $invoiceAmount;
		$monthlyPayment->createMonthlyPayment($monthlyPayment);
		//On réinitialise les variables de calcul de la facture
		$invoiceAmount = 0;
		$invoiceLines = array();
	}
	$actualPartner = current($payments_array)['idPartner'];
	$invoiceAmount += current($payments_array)['priceDailyPayment'];
	if (!empty(current($payments_array)['thisBooking']['dateForth'])) {
		$prestaDate = current($payments_array)['thisBooking']['dateForth'];
	} else {
		$prestaDate = current($payments_array)['thisBooking']['dateBack'];
	}
	$prestaLine = [
		"paymentId" => current($payments_array)['idDailyPayment'],
		"customerName" => current($payments_array)['thisCustomer']['lastNameCustomer']." ".current($payments_array)['thisCustomer']['firstNameCustomer'],
		"date" => $prestaDate,
		"formula" => current($payments_array)['thisBooking']['formulaBooking'],
		"price" => current($payments_array)['priceDailyPayment']
	];
	array_push($invoiceLines, $prestaLine);
	next($payments_array);
}

$result = $monthlyPayment->listMonthlyPaymentsByDate($monthlyPayment);

if ($result) {
    echo json_encode($result);
} else {
    echo json_encode([ "message" => "Les factures mensuelles n'ont pas pu être retournées..." ]);
}