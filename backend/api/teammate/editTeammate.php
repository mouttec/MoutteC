<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Teammate.php";

$db = new Database();
$conn = $db->connect();
$teammate = new Teammate($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$teammate->firstNameTeammate = $decodedData->firstNameTeammate;
$teammate->lastNameTeammate = $decodedData->lastNameTeammate;
$teammate->usernameTeammate = $decodedData->usernameTeammate;
$teammate->mailTeammate = $decodedData->mailTeammate;
$teammate->phoneTeammate = $decodedData->phoneTeammate;
$teammate->statusTeammate = $decodedData->statusTeammate;
$teammate->jobTeammate = $decodedData->jobTeammate;
$teammate->idAgency = $decodedData->idAgency;
$teammate->superAdmin = $decodedData->superAdmin;

if (!empty($decodedData->idTeammate)) {
    $teammate->idTeammate = $decodedData->idTeammate;
    $result = $teammate->updateTeammate($teammate);
} else {
    $result = $teammate->createTeammate($teammate);
}

if ($result) {
    echo json_encode([ "message" => "Le teammate a été édité !" ]);
} else {
    echo json_encode([ "message" => "Le teammate n'a pas pu être édité..." ]);
}