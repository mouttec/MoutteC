<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
include_once "../../config/Database.php";
include_once "../../models/DailyPayment.php";
include_once "../../models/MonthlyBilling.php";

$db = new Database();
$conn = $db->connect();
$dailyPayment = new DailyPayment($conn);
$monthInvoice = new MonthlyBilling($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$monthRequired = $decodedData->monthRequired;
$yearRequired = $decodedData->yearRequired;

if ((!empty($monthRequired)) && (!empty($yearRequired))) {
	$billingData = $dailyPayment->searchBillingsByMonth($monthRequired, $yearRequired);
	$counter = $billingData->rowCount();
	if ($counter > 0) {
		$billings_array = array();
		$partners_list = array();
		$invoiceAmount = 0;
		while($row = $billingData->fetch()) {
			extract($row);
			$billing_item = [
				"idPartner" => $idPartner,
				"idCustomer" => $idCustomer,
				"priceDailyPayment" => $priceDailyPayment,
				"idContract" => $idContract
			];
			if (($idPartner != $thisPartner) && ($invoiceAmount != 0)) {
				$invoice = [
					"idPartner" = $thisPartner,
					"invoiceAmount" = $invoiceAmount
				]
				$monthInvoice->createInvoice($invoice);
				$invoiceAmount = 0;
				$thisPartner = $idPartner;			
			}
			$invoiceAmount += $priceDailyPayment;
			array_push($billings_array, $billing_item);
		}
	}
} 
