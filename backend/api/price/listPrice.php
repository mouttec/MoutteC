<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
include_once "../../config/Database.php";
include_once "../../models/Prices.php";

$db = new Database();
$conn = $db->connect();
$price = new Price($conn);

$decodedData = json_decode(file_get_contents("php://input"));


$prices = $price->listPrices();
$counter = $prices->rowCount();
if ($counter > 0) {
    $prices_array = array();
    while($row = $prices->fetch()) {
        extract($row);
        $price_item = [
            "idPrice" => $idPrice,
            "priceType" => $priceType,
            "amount" => $amount
        ];
        array_push($prices_array, $price_item);
    }
    $result = $prices_array;
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}