<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Agency.php";

$db = new Database();
$conn = $db->connect();
$agency = new Agency($conn);

$agency->idAgency = $_GET['idAgency'];
$result = $agency->closeAgency($agency);

if ($result) {
    echo json_encode(["message" => "L'agence a été effacée !"]);
} else {
    echo json_encode(["message" => "L'agence n'a pas pu être effacée..."]);
}
