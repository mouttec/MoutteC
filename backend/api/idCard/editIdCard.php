<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/IdCard.php";

$db = new Database();
$conn = $db->connect();
$identityCard = new IdentityCard($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$identityCard->urlCard = $decodedData->urlCard;
$identityCard->idContract = $decodedData->idContract;
$identityCard->powerRecovery = $decodedData->powerRecovery;

$result = $identityCard->createCard($identityCard);

if ($result) {
    echo json_encode([ "message" => "La carte a été enregistrée !" ]);
} else {
    echo json_encode([ "message" => "La carte n'a pas pu être enregistrée..." ]);
}