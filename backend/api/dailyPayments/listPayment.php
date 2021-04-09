<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/DailyPayment.php";

$db = new Database();
$conn = $db->connect();
$dailyPayment = new DailyPayment($conn);

if (isset($_GET['idBooking'])) {
    $dailyPayment->idBooking = $_GET['idBooking'];
    $result = $dailyPayment->searchPaymentByBooking($dailyPayment);
} else if (isset($_GET['idDailyPayment'])) {
    $dailyPayment->idDailyPayment = $_GET['idDailyPayment'];
    $result = $dailyPayment->searchPaymentById($dailyPayment);
} else {
    if (isset($_GET['idPartner'])) {
        $dailyPayment->idPartner = $_GET['idPartner'];
        $payments = $dailyPayment->listPaymentsByPartner($dailyPayment);
    }
    elseif (isset($_GET['idCustomer'])) {
        $dailyPayment->idCustomer = $_GET['idCustomer'];
        $payments = $dailyPayment->listPaymentsByCustomer($dailyPayment);
    } elseif ((isset($_GET['monthRequired'])) && (isset($_GET['yearRequired']))) {
        $monthRequired = $decodedData->monthRequired;
        $yearRequired = $decodedData->yearRequired;
        $payments = $dailyPayment->listPaymentsByMonth($monthRequired, $yearRequired);
    } elseif ((isset($decodedData->dateDailyPayment))) {
        $dailyPayment->dateDailyPayment = $decodedData->dateDailyPayment;
        $payments = $dailyPayment->listPaymentsByDate($dailyPayment);
    } else {
        $payments = $dailyPayment->listPayments();
    }
    $counter = $payments->rowCount();
    if ($counter > 0) {
        $billings_array = array();
        $invoiceAmount = 0;
        while($row = $payments->fetch()) {
            extract($row);
            $billing_item = [
                "idDailyPayment" => $idDailyPayment,
                "idPartner" => $idPartner,
                "idCustomer" => $idCustomer,
                "priceDailyPayment" => $priceDailyPayment,
                "idBooking" => $idBooking,
                "idCustomer" => $idCustomer
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