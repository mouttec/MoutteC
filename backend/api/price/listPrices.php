<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Price.php";

$db = new Database();
$conn = $db->connect();
$price = new Price($conn);


$prices = $price->listPrices();		
$counter = $partners->rowCount();
if ($counter > 0) {
	$prices_array = array();
	while ($row = $partners->fetch()) {
		extract($row);
		$price_item = [
			"idPrice" => $idPrice,
            "typePrice" => $typePrice,
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