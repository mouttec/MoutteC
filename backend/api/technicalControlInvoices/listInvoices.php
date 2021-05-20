<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/technicalControlInvoice.php";

$db = new Database();
$conn = $db->connect();
$technicalControlInvoice = new technicalControlInvoice($conn);

if (isset($_GET['idTechnicalControlInvoices'])) {
    $technicalControlInvoice->idTechnicalControlInvoices = $_GET['idTechnicalControlInvoices'];
    $result = $technicalControlInvoice->searchInvoiceById($technicalControlInvoice);
} else {
    $technicalControlInvoices = $technicalControlInvoice->listInvoices();
    $counter = $technicalControlInvoices->rowCount();
    if ($counter > 0) {
        $technicalControlInvoices_array = array();
        while ($row = $technicalControlInvoices->fetch()) {
            extract($row);
            $technicalControlInvoice_item = [
                 "idTechnicalControlInvoices" => $idTechnicalControlInvoices,
                 "idPartner" => $idPartner,
                 "monthlyInvoice" => $monthlyInvoice,
                 "urlInvoice" => $urlInvoice,
                 "priceInvoice" => $priceInvoice
            ];
            array_push($technicalControlInvoices_array, $technicalControlInvoice_item);
        }
        $result = $technicalControlInvoices_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}