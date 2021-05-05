<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/MonthlyPayment.php";
include_once "../../models/DailyPayment.php";
include_once "../../models/Customer.php";
include_once "../../models/Booking.php";
include_once "../../models/Partner"


$db = new Database();
$conn = $db->connect();
$monthlyPayments = new MonthlyPayment($conn);
$dailyPayment = new DailyPayment($conn);
$customer = new Customer($conn);
$booking = new Booking($conn);
$partner = new Partner($conn);

$monthConcerned = date('m')-1;
$yearConcerned = date('Y', strtotime('-15 days'));
//Recherche des payments uniquement pour la période en court mois précédent/année en cours - 15 jours 
//pour les mois de décembre qui seront validés les années suivantes en janvier.
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
/*
$payments_array[
	current([
		idDailyPayment
		thisPartner [
			"idPartner" => $idPartner,
            "usernamePartner" => $usernamePartner,
            "namePartner" => $namePartner,
            "numberAddressPartner" => $numberAddressPartner,
            "typeAddressPartner" => $typeAddressPartner,
            "nameAddressPartner" => $nameAddressPartner,
            "complementAddressPartner" => $complementAddressPartner,
            "zipAddressPartner" => $zipAddressPartner,
            "cityAddressPartner" => $cityAddressPartner,
            "phonePartner" => $phonePartner,
            "statusPartner" => $statusPartner,
            "typePartner" => $typePartner,
            "mailPartner" => $mailPartner,        
            "nameBilling" => $nameBilling,
            "siretPartner" => $siretPartner,
            "numberAddressBilling" => $numberAddressBilling,
            "typeAddressBilling" => $typeAddressBilling,
            "nameAddressBilling" => $nameAddressBilling,
            "complementAddressBilling" => $complementAddressBilling,
            "zipAddressBilling" => $zipAddressBilling,
            "cityAddressBilling" => $cityAddressBilling,
            "idAgency" => $idAgency
		]
		priceDailyPayment
		thisBooking [
	        "idBooking" => $idBooking,
	        "idCustomer" => $idCustomer,
	        "idPartner" => $idPartner,
	        "statusBooking" => $statusBooking,
	        "formulaBooking" => $formulaBooking,
	        "idCar" => $idCar,
	        "idAgency" => $idAgency,
	        "dateForth" => $dateForth,
	        "hoursForth" => $hoursForth,
	        "idForthAddress" => $idForthAddress,
	        "distanceForth" => $distanceForth,
	        "durationForth" => $durationForth,
     		"idBackAddress" => $idBackAddress,
	        "dateBack" => $dateBack,
	        "hoursBack" => $hoursBack,
	        "distanceBack" => $distanceBack,
	        "durationBack" => $durationBack,
	        "originBooking" => $originBooking,
		]
		thisCustomer [
	        "idCustomer" => $idCustomer,
	        "firstNameCustomer" => $firstNameCustomer,
	        "lastNameCustomer" => $lastNameCustomer,
	        "dateOfBirthdayCustomer" => $dateOfBirthdayCustomer,
	        "phoneCustomer" => $phoneCustomer,
	        "mailCustomer" => $mailCustomer
		]
	])
]
$invoiceLines[]
*/
$invoiceLines = array();
$i = 1;
for ($p = 0; $p < count($payments_array); $p++) {
	if ((current($payments_array)['thisPartner']['idPartner'] != $actualPartnerId) && ($p > 0)) {
		//PDF
		//$pdfFileName = $actualPartnerId.'_'.$monthConcerned.$yearConcerned;
		//$namePartner = current($payments_array)['thisPartner']['namePartner'];
		//$streetAddressBilling = current($payments_array)['thisPartner']['numberAddressBilling'].', '.current($payments_array)['thisPartner']['typeAddressBilling'].current($payments_array)['thisPartner']['nameAddressBilling'];
		// $complementAddressBilling = current($payments_array)['thisPartner']['complementAddressBilling'];
		// $cityAddressBilling = current($payments_array)['thisPartner']['zipAddressBilling'].' '.strtoupper(current($payments_array)['thisPartner']['cityAddressBilling']);
		// $vatPercentage = 20;
		// $vatAmount = $invoiceAmount / (100+$vatPercentage) * $vatPercentage;
		// $subtotalInvoiceAmount = $invoiceAmount - $vatAmount;
		// $outfdf = fdf_create();
		//Informations du partner
		// fdf_set_value($outfdf, 'namePartner', $namePartner);
		// fdf_set_value($outfdf, 'streetAddressBilling', $streetAddressBilling);
		// if (!empty($complementAddressBilling))
		// 	fdf_set_value($outfdf, 'complementAddressBilling', $complementAddressBilling);
		// }
		// fdf_set_value($outfdf, 'cityAddressBilling', $cityAddressBilling);
		// //Lignes de facturation
		// for ($i = 0; $i < count($prestaLine); $i++) {
		// 	fdf_set_value($outfdf, 'invoiceLine'.$i.'PaymentId', $prestaLine[$i]['paymentId']);
		// 	fdf_set_value($outfdf, 'invoiceLine'.$i.'CustomerName', $prestaLine[$i]['customerName']);
		// 	fdf_set_value($outfdf, 'invoiceLine'.$i.'Date', $prestaLine[$i]['date']);
		// 	fdf_set_value($outfdf, 'invoiceLine'.$i.'Formula', $prestaLine[$i]['formula']);
		// 	fdf_set_value($outfdf, 'invoiceLine'.$i.'PriceDailyPayment', $prestaLine[$i]['priceDailyPayment']);
		// }
		// fdf_set_value($outfdf, 'subtotalInvoiceAmount', $subtotalInvoiceAmount);
		// fdf_set_value($outfdf, 'VAT20', $vatAmount);
		// fdf_set_value($outfdf, 'totalInvoiceAmount', $invoiceAmount);
		//BDD
		$monthlyPayment->idPartner = $actualPartnerId;
		$monthlyPayment->partnerKey = $actualPartnerKey;
		$monthlyPayment->statusMonthlyPayment = 'En attente';
		$monthlyPayment->dateMonthlyPayment = $monthConcerned.$yearConcerned;
		$monthlyPayment->invoiceNumber = $monthConcerned.$yearConcerned.$actualPartnerId.'-'.$i;
		$monthlyPayment->invoiceLines = $invoiceLines;
		$monthlyPayment->invoiceAmount = $invoiceAmount;
		$monthlyPayment->createMonthlyPayment($monthlyPayment);
		//On réinitialise les variables de calcul de la facture
		$invoiceAmount = 0;
		$invoiceLines = array();
		//Incrémentation dun nombre de facture créées
		$i++;
	}
	$actualPartner = current($payments_array)['thisPartner']['idPartner'];
	$actualPartnerKey = current($payments_array)['thisPartner']['partnerKey'];
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