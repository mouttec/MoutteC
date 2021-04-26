<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/MonthlyPayment.php";

$db = new Database();
$conn = $db->connect();
$monthlyPayment = new MonthlyPayment($conn);

if (isset($_GET['idMonthlyPayment'])) {
    $monthlyPayment->idMonthlyPayment = $_GET['idMonthlyPayment'];
    $result = $monthlyPayment->searchMonthlyPayments($monthlyPayment);
} else {
    if (isset($_GET['idPartner'])) {
        $monthlyPayment->idPartner = $_GET['idPartner'];
        $payments = $monthlyPayment->listMonthlyPaymentsByPartner($monthlyPayment);
    } else {
        $payments = $monthlyPayment->listMonthlyPayments();
    }
    $counter = $payments->rowCount();
    if ($counter > 0) {
        $payments_array = array();
        while ($row = $payments_array->fetch()) {
            extract($row);
            $payment_item = [
                 "idMonthlyPayment" => $idMonthlyPayment,
                 "idPartner" => $idPartner,
                 "statusMonthlyPayment" => $statusMonthlyPayment,
                 "monthMonthlyPayment" => $monthMonthlyPayment,
                 "urlMonthlyPayment" => $urlMonthlyPayment,
                 "invoiceAmount" => $invoiceAmount,
                 "dateMonthlyPayment" => $dateMonthlyPayment
            ];
            array_push($payments_array, $payment_item);
        }
        $result = $payments_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}