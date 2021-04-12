<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Partner.php";

$db = new Database();
$conn = $db->connect();
$partner = new Partner($conn);

$partner->idPartner = $GET_['idPartner'];
$result = $partner->deactivatePartner($partner);

if ($result) {
    echo json_encode(["message" => "Le Partner a été désactivé !"]);
} else {
    echo json_encode(["message" => "Le Partner n'a pas pu être désactivé..."]);
}
