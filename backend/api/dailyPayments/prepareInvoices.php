<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
include_once "../../config/Database.php";
include_once "../../models/DailyPayment.php";
include_once "../../models/MonthlyBilling.php";
include_once "../../models/Customer.php";
include_once "../../models/Booking.php";


$db = new Database();
$conn = $db->connect();
$dailyPayment = new DailyPayment($conn);
$booking = new Booking($conn);
$monthInvoice = new MonthlyBilling($conn);
$customer = new Customer($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$monthRequired = $decodedData->monthRequired;
$yearRequired = $decodedData->yearRequired;

if ((!empty($monthRequired)) && (!empty($yearRequired))) {
	$billingData = $dailyPayment->searchBillingsByMonth($monthRequired, $yearRequired);
	$counter = $billingData->rowCount();
	if ($counter > 0) {
		$billings_array = array();
		$partners_list = array();
		$billingDetails_array = array();
		$invoiceAmount = 0;
		while($row = $billingData->fetch()) {
			extract($row);
			$booking->idBooking = $idBooking;
			$thisBooking = $booking->searchBookingById($booking);
			$customer->idCustomer = $booking->idCustomer;
			$thisCustomer = $customer->searchCustomerById($customer);
			$billing_item = [
				"idPartner" => $idPartner,
				"idCustomer" => $idCustomer,
				"priceDailyPayment" => $priceDailyPayment,
				"idBooking" => $idBooking,
				"formulaBooking" => $thisBooking->formulaBooking,
			];
			$billingDetails = [
				"lastNameCustomer" => $thisCustomer->lastNameCustomer,
				"firstNameCustomer" => $thisCustomer->lastNameCustomer,
				"formulaBooking" => $thisBooking->formulaBooking,
				"priceDailyPayment" => $priceDailyPayment,
				"additionnalFeesDailyPayment" => $additionnalFeesDailyPayment,
				"totalDailyPayment" => $totalDailyPayment
			]
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
