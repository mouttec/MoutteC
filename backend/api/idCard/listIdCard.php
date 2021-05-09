<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/IdCard.php";

$db = new Database();
$conn = $db->connect();
$identityCard = new IdentityCard($conn);

if (isset($_GET['idCard'])) {
	$identityCard->idCard = $_GET['idCard'];
    $result = $identityCard->searchCardById($identityCard);
} else {
	if (isset($_GET['idContract'])) {
		$identityCard->idContract = $_GET['idContract'];
		$identityCards = $identityCard->listCardsByContract($identityCard);
	} else {
	    $identityCards = $identityCard->listCards();		
	}
    $counter = $identityCards->rowCount();
    if ($counter > 0) {
    	$identityCards_array = array();
    	while ($row = $identityCards->fetch()) {
    		extract($row);
    		$card_item = [
				"idCard" => $idCard,
	            "urlCard" => $urlCard,
	            "idContract" => $idContract,
	            "powerRecovery" => $powerRecovery
    		];
    		array_push($identityCards_array, $card_item);
    	}
    	$result = $identityCards_array;
    }
}

if (isset($result) && !empty($result)) {
 	echo json_encode($result);
} else { 
	http_response_code(404); 
}