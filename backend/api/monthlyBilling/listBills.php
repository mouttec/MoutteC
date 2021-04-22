<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/MonthlyBillings.php";

$db = new Database();
$conn = $db->connect();
$monthlyBilling = new MonthlyBilling($conn);

if (isset($_GET['idMonthlyPayment'])) {
    $monthlyBilling->idMonthlyPayment = $_GET['idMonthlyPayment'];
    $result = $monthlyBilling->searchMonthlyBill($monthlyBilling);
} else {
    if (isset($_GET['idPartner'])) {
        $monthlyBilling->idPartner = $_GET['idPartner'];
        $bills = $monthlyBilling->listMonthlyBillsByPartner($monthlyBilling);
    } else {
        $bills = $monthlyBilling->listMonthlyBills();
    }
    $counter = $billings->rowCount();
    if ($counter > 0) {
        $bills_array = array();
        while ($row = $bills->fetch()) {
            extract($row);
            $bill_item = [
                 "idMonthlyPayment" => $idMonthlyPayment,
                 "idPartner" => $idPartner,
                 "statusMonthlyPayment" => $statusMonthlyPayment,
                 "monthMonthlyPayment" => $monthMonthlyPayment,
                 "urlMonthlyPayment" => $urlMonthlyPayment,
                 "invoiceAmount" => $invoiceAmount,
                 "dateMonthlyPayment" => $dateMonthlyPayment
            ];
            array_push($bills_array, $bill_item);
        }
        $result = $bills_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}