<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Partner.php";

$db = new Database();
$conn = $db->connect();
$partner = new Partner($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$partner->idPartner = $decodedData->idPartner;
$partner->mixedPassword = $decodedData->password;

if ((!empty($partner->idPartner)) /*|| ($_SESSION('superAdmin' == 1))*/) {
    $result = $partner->changePasswordPartner($partner);
} 

if ($result) {
    echo json_encode([ "message" => "Le mot de passe du Partner a été édité !" ]);
} else {
    echo json_encode([ "message" => "Le mot de passe du Partner n'a pas pu être édité..." ]);
}