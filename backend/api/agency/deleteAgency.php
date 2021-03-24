<?php

// die('test');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// On envoie les headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");

// On inclus les objets (ou classes) nécessaires
include_once "../../config/Database.php";
include_once "../../models/Agency.php";

$db = new Database();
$conn = $db->connect();
$agency = new Agency($conn);

$decodedData = json_decode(file_get_contents("php://input"));
$agency->idAgency = $decodedData->idAgency;
$result = $agency->deleteAgency($agency);

if ($result) {
    echo json_encode(["message" => "L'agence a été effacée !"]);
} else {
    echo json_encode(["message" => "L'agence n'a pas pu être effacée..."]);
}
