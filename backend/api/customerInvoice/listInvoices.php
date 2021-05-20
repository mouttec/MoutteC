<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
include_once "../../config/Database.php";
include_once "../../models/CustomerInvoices.php";

$db = new Database();
$conn = $db->connect();
$customerInvoice = new CustomerInvoice($conn);

$decodedData = json_decode(file_get_contents("php://input"));

if (isset($decodedData->idBooking)) {
    $customerInvoice->idBooking = $decodedData->idBooking;
    $result = $customerInvoice->searchInvoiceByBooking($customerInvoice);
} else if (isset($decodedData->idInvoice)) {
    $customerInvoice->idInvoice = $decodedData->idInvoice;
    $result = $custo->searchInvoiceById($customerInvoice);
} else {
    if (isset($decodedData->idPartner)) {
        $customerInvoice->idPartner = $decodedData->idPartner;
        $invoices = $customerInvoice->listCustomerInvoicesByPartner($customerInvoice);
    } elseif (isset($decodedData->idCustomer)) {
        $customerInvoice->idCustomer = $decodedData->idCustomer;
        $invoices = $customerInvoice->listInvoicesByCustomer($customerInvoice);
    } elseif ((isset($decodedData->invoiceDate))) {
        $customerInvoice->invoiceDate = $decodedData->invoiceDate;
        $invoices = $customerInvoice->listInvoicesByDate($customerInvoice);
    } else {
        $invoices = $customerInvoice->listCustomerInvoices();
    }
    $counter = $invoices->rowCount();
    if ($counter > 0) {
        $invoices_array = array();
        while($row = $invoices->fetch()) {
            extract($row);
            $invoice_item = [
                "idInvoice" => $idInvoice,
                "invoiceNumber" => $invoiceNumber,
                "invoiceLines" => $invoiceLines,
                "amountInvoice" => $amountInvoice,
                "invoiceDate" => $invoiceDate,
                "idPartner" => $idPartner,
                "idCustomer" => $idCustomer,
                "idBooking" => $idBooking,
                "idContract" => $idContract,
                "idCar" => $idCar
            ];
            array_push($invoices_array, $invoice_item);
        }
        $result = $invoices_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}