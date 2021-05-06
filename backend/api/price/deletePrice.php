<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Price.php";

$db = new Database();
$conn = $db->connect();
$price = new Price($conn);

$decodedData = json_decode(file_get_contents("php://input"));

if (isset($decodedData->idPrice)) {
	$price->idPrice = $decodedData->idPrice;
	$result = $price->deletePrice($price);
}


if ($result) {
    echo json_encode([ "message" => "Le tarif a été effacé !" ]);
} else {
    echo json_encode([ "message" => "Le tarif n'a pas pu être effacé..." ]);
}