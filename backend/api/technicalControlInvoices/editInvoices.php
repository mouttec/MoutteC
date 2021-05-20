<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/technicalControlInvoice.php";

$db = new Database();
$conn = $db->connect();
$technicalControlInvoice = new technicalControlInvoice($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$technicalControlInvoice->idTechnicalControlInvoices = $decodedData->idTechnicalControlInvoices;
$technicalControlInvoice->idPartner = $decodedData->idPartner;
$technicalControlInvoice->monthlyInvoice = $decodedData->monthlyInvoice;
$technicalControlInvoice->modelCar = $decodedData->modelCar;
$technicalControlInvoice->priceInvoice = $decodedData->priceInvoice;
$filenameTechnicalControlInvoice = $decodedData->filenameTechnicalControlInvoice;
$technicalControlInvoice->urlInvoice = $technicalControlInvoice->idTechnicalControlInvoices."/". $filenameTechnicalControlInvoice;
$ctechnicalControlInvoicear->urlInvoice = $decodedData->urlInvoice;

if(!empty($decodedData->idTechnicalControlInvoices)) {
    $ctechnicalControlInvoicear->idTechnicalControlInvoices = $decodedData->idTechnicalControlInvoices;
    $result = $technicalControlInvoice->updateInvoices($technicalControlInvoice);
} else {
    $result = $car->createInvoice($ctechnicalControlInvoicear);
}

if ($result) {
    echo json_encode([ "message" => "La facture a été édité !" ]);
}  else { 
    echo json_encode([ "message" => "La facture n'a pas pu être édité..." ]);
}