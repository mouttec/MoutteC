<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Teammate.php";

$db = new Database();
$conn = $db->connect();
$teammate = new Teammate($conn);

$teammate->idTeammate = $_GET['idTeammate'];
$result = $teammate->deactivateTeammate($teammate);

if ($result) {
    echo json_encode(["message" => "Le Teammate a été désactivé !"]);
} else {
    echo json_encode(["message" => "Le Teammate n'a pas pu être désactivé..."]);
}