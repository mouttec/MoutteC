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
if (empty($thisContract['additionnalFees'])) {
    $thisContract['additionnalFees'] = array();
}
array_push($thisContract['additionnalFees'], $decodedData->additionnalFee);
$contract->additionnalFees = $thisContract->additionnalFees;
$result = $contract->updateFees($contract);

if ($result) {
    echo json_encode([ "message" => "Les frais ont été ajoutés !" ]);
} else {     
    echo json_encode([ "message" => "Les frais n'ont pas pu être ajoutés..." ]);
}