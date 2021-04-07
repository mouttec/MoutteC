<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/DailyPayment.php";

$db = new Database();
$conn = $db->connect();
$dailyPayment = new DailyPayment($conn);

if (isset($_GET['idContract'])) {
    $dailyPayment->idContract = $_GET['idContract'];
    $result = $dailyPayment->searchPaymentByContract($dailyPayment);
} else {
    if (isset($_GET['idPartner'])) {
        $dailyPayment->idPartner = $_GET['idPartner'];
        $payments = $dailyPayment->searchPaymentsByPartner($dailyPayment);
    }
    elseif (isset($_GET['idCustomer'])) {
        $dailyPayment->idCustomer = $_GET['idCustomer'];
        $payments = $dailyPayment->searchPaymentsByCustomer($dailyPayment);
    } else if ((isset($_GET['monthRequired'])) && (isset($_GET['yearRequired']))) {
        $monthRequired = $decodedData->monthRequired;
        $yearRequired = $decodedData->yearRequired;
        $payments = $dailyPayment->searchBillingsByMonth($monthRequired, $yearRequired);
    } else {
        $payments = $dailyPayment->listPayments();
    }
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
            array_push($billings_array, $billing_item);
        }
        $result = $billings_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}