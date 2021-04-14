<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Contract.php";

$db = new Database();
$conn = $db->connect();
$contract = new Contract($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$contract->idContract = $decodedData->idContract;
$thisContract = $contract->searchContractById($contract);
if(!empty($thisContract->urlPartnerBackInventory)) {
    //étape de la restitution au client
    $thisContract->urlCustomerBack = $decodedData->urlVideo;
    $result = $thisContract->addCustomerBackInventory($thisContract);
} elseif (!empty($thisContract->urlPartnerForthInventory)) {
    //étape de la récupération au garage
    $thisContract->idTeammateReturn = $decodedData->idTeammateReturn;
    $thisContract->urlPartnerBackInventory = $decodedData->urlVideo;
    $result = $thisContract->addPartnerBackInventory($thisContract);
} elseif (!empty($thisContract->urlCustomerForthInventory)) {
    //étape du dépôt au garage
    $thisContract->urlPartnerForthInventory = $decodedData->urlVideo;
    $result = $thisContract->addPartnerForthInventory($thisContract);
}


if ($result) {
    echo json_encode([ "message" => "La vidéo a été ajoutée !" ]);
} else {     
    echo json_encode([ "message" => "La vidéo n'a pas pu être ajoutée..." ]);
}