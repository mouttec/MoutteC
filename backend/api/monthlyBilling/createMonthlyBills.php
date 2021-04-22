<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/MonthlyBillings.php";
include_once "../../mondel/DailyPayments.php";

$db = new Database();
$conn = $db->connect();
$monthlyBilling = new MonthlyBillings($conn);
$dailyPayment = new DailyPayments($conn);	

$monthConcerned = date('m')-1;
$yearConcerned = date('Y', strtotime('-15 days'));
$payments = $dailyPayment->listPaymentsByMonth($monthConcerned, $yearConcerned);
$counter = $payments->rowCount();
if ($counter > 0) {
    $payments_array = array();
    while($row = $payments->fetch()) {
        extract($row);
        $payment_item = [
            "idDailyPayment" => $idDailyPayment,
            "idPartner" => $idPartner,
            "idCustomer" => $idCustomer,
            "priceDailyPayment" => $priceDailyPayment,
            "idBooking" => $idBooking,
            "idCustomer" => $idCustomer
        ];
        array_push($payments_array, $payment_item);
    }
}
for ($p = 0; $p < count($payments_array); $p++) {
	if (($p > 0) && (current($payments_array)['idPartner'] == $actualPartner)) {
		$invoiceAmount += $priceDailyPayment;
	} else {
		if ($p > 0) {
			//Création de la facture
			$monthlyBilling->idPartner = $actualPartner;
			$monthlyBilling->statusMonthlyPayment = 'En attente';
			$monthlyBilling->monthMonthlyPayment = $monthConcerned;
			$monthlyBilling->urlMonthlyPayment = 'url_a_formater';
			$monthlyBilling->invoiceAmount = $invoiceAmount;
			$monthlyBilling->createMonthlyPayment($monthlyBilling);
		}
		$actualPartner = current($payments_array)['idPartner'];
		$invoiceAmount = $priceDailyPayment;
	}
}

$result = $monthlyBilling->listMonthlyBillsByMonth($monthlyBilling);

if ($result) {
    echo json_encode($result);
} else {
    echo json_encode([ "message" => "Les factures mensuelles n'ont pas pu être retournées..." ]);
}