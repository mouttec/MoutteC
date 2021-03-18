<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
// On envoie les headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
// On inclus les objets (ou classes) nécessaires
include_once "../../config/Database.php";
include_once "../../models/Teammate.php";

//!\\ Est-ce que l'on récupère une $data ?
$decodedData = json_decode(file_get_contents("php://input"));

$db = new Database();
$conn = $db->connect();
$teammateRequest = new Teammate($conn);
if (isset($decodedData['usernameTeammate']) && !empty($decodedData['usernameTeammate'])) {
    // $usernameTeammate = mysqli_real_escape_string($mysqli, trim($decodedData['usernameTeammate']));
    $usernameTeammate = htmlspecialchars(strip_tags($decodedData['usernameTeammate']);
}

//Si usernameTeammate est true, c'est qu'on en cherche un en particulier
if ($usernameTeammate) {
    $teammate = $teammateRequest->searchTeammate($usernameTeammate);
    $teammate : echo json_encode($teammate) ? http_response_code(404);
} else {
    $teammates = $teammateRequest->listTeammates();
    $teammates : echo json_encode($teammates) ? http_response_code(404);
    }
}