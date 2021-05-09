<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
include_once("database.php");
include_once "../../models/Teammate.php";

$db = new Database();
$conn = $db->connect();
$teammate = new Teammate($conn);

$decodedData = json_decode(file_get_contents("php://input"));
$teammate->usernameTeammate = $decodedData->usernameTeammate;
$password = htmlspecialchars($decodedData->$password);

$teammateExists = $teammateRequest->searchTeammateByUsername($teammate);

if ((!empty($teammateExists)) && (password_verify($password, $teammateExists->mixedPassword))) {
  		echo json_encode($teammateExists);
} else {
  	http_response_code(404);
}