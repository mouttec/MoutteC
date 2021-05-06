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

$price->typePrice = $decodedData->typePrice;
$price->amount = $decodedData->amount;

if (isset($decodedData->idPrice)) {
	$price->idPrice = $decodedData->idPrice;
	$result = $price->updatePrice($price);
} else {
	$result = $price->createNewPrice($price);
}


if ($result) {
    echo json_encode([ "message" => "Le prix a été édité !" ]);
} else {
    echo json_encode([ "message" => "Le prix n'a pas pu être édité..." ]);
}