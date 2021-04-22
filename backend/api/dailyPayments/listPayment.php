<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
include_once "../../config/Database.php";
include_once "../../models/DailyPayment.php";

$db = new Database();
$conn = $db->connect();
$dailyPayment = new DailyPayment($conn);

$decodedData = json_decode(file_get_contents("php://input"));

if (isset($decodedData->idBooking)) {
    $dailyPayment->idBooking = $decodedData->idBooking;
    $result = $dailyPayment->searchPaymentByBooking($dailyPayment);
} else if (isset($decodedData->idDailyPayment)) {
    $dailyPayment->idDailyPayment = $decodedData->idDailyPayment;
    $result = $dailyPayment->searchPaymentById($dailyPayment);
} else {
    if (isset($decodedData->idPartner)) {
        $dailyPayment->idPartner = $decodedData->idPartner;
        $payments = $dailyPayment->listPaymentsByPartner($dailyPayment);
    } elseif (isset($decodedData->idCustomer)) {
        $dailyPayment->idCustomer = $decodedData->idCustomer;
        $payments = $dailyPayment->listPaymentsByCustomer($dailyPayment);
    } elseif ((isset($decodedData->monthRequired)) && (isset($decodedData->yearRequired))) {
        $monthRequired = $decodedData->monthRequired;
        $yearRequired = $decodedData->yearRequired;
        $payments = $dailyPayment->listPaymentsByMonth($monthRequired, $yearRequired);
    } elseif ((isset($decodedData->dateDailyPayment))) {
        $dailyPayment->dateDailyPayment = $decodedData->dateDailyPayment;
        $payments = $dailyPayment->listPaymentsByDate($dailyPayment);
    } else {
        $dailyPayment->dateDailyPayment = date('j/m/Y');        
        $payments = $dailyPayment->listPaymentsByDate();
    }
    $counter = $payments->rowCount();
    if ($counter > 0) {
        $billings_array = array();
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