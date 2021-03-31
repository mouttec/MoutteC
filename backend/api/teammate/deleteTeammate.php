<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Teammate.php";

$db = new Database();
$conn = $db->connect();
$teammate = new Teammate($conn);

$decodedData = json_decode(file_get_contents("php://input"));
$teammate->idTeammate = $decodedData->idTeammate;
$result = $teammate->deleteTeammate($teammate);

if ($result) {
    echo json_encode(["message" => "Le Teammate a été effacé !"]);
} else {
    echo json_encode(["message" => "Le Teammate n'a pas pu être effacé..."]);
}