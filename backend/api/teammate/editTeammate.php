<?php

//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

// On envoie les headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");

// On inclus les objets (ou classes) nécessaires
include_once "../../config/Database.php";
include_once "../../models/Manager.php";

$decodedData = json_decode(file_get_contents("php://input"));
foreach ($decodedData as $key => $value) {
    array_push($teammate[$key] =  htmlspecialchars(strip_tags($value)));
}

$db = new Database();
$conn = $db->connect();
$teammateRequest = new Teammate($conn);
$teammateExists = $teammateRequest->searchTeammate($teammate['usernameTeammate']);
//On regarde quelle action de Read est demandée
switch ($teammate['action']) {
    case 'editTeamate':
       !empty($teammateExists) : $result = $teammateRequest->updateTeammate($teammate) ? $result = $teammateRequest->createTeammate($teammate);
        break;
    case 'changePassword':
    //On vérifie que le Teammate existe et on demande l'ancien mot de passe, voir eventuellement si une session super admin est ouverte à modifier sans l'ancien mdp
        (!empty($teammateExists) && (password_verify($oldPassword, $teammate['mixedPassword']) || $_SESSION('superAdmin' == 1)) : $teammateRequest->passwordUpdate($teammate);
        break;
    case 'deleteTeammmate':
        $result = $teammate->deleteTeammate($teammate['idTeammate']);
        break;
    default:
        $result = false;
        break;
}
$result : echo json_encode([ "message" => "Le teammate a été édité !" ]) ? echo json_encode([ "message" => "Le teammate n'a pas pu être édité..." ]);


// if (isset($decodedData['usernameTeammate']) && !empty($teammate['usernameTeammate'])) {
//     $db = new Database();
//     $conn = $db->connect();
//     $teammateRequest = new Teammate($conn);
//     $teammateExist = $teammateRequest->searchTeammate($teammate['usernameTeammate']);
//     if ($teammateExist) {
//         $result = $teammateRequest->updateTeammate($teammate);
//     } else {
//         $result = $teammateRequest->createTeammate($teammate);
//     }
//     return $result;
// } else {    
//     echo json_encode([ "message" => "Le Teammate n'a pas pu être édité..." ]);
// }

// $teammate = [
//     // 'firstNameTeammate' => mysqli_real_escape_string($mysqli, trim($decodedData['firstNameTeammate'])),
//     // 'lastNameTeammate' => mysqli_real_escape_string($mysqli, trim($decodedData['lastNameTeammate'])),
//     // 'usernameTeammate' => mysqli_real_escape_string($mysqli, trim($decodedData['usernameTeammate'])),
//     // 'mailTeammate' => mysqli_real_escape_string($mysqli, trim($decodedData['mailTeammate'])),
//     // 'phoneTeammate' => mysqli_real_escape_string($mysqli, trim($decodedData['phoneTeammate'])),
//     // 'passwordTeammate' => mysqli_real_escape_string($mysqli, trim($decodedData['passwordTeammate'])),
//     // 'statusTeammate' => mysqli_real_escape_string($mysqli, trim($decodedData['statusTeammate'])),
//     // 'teamManager' => mysqli_real_escape_string($mysqli, trim($decodedData['teamManager'])),
//     // 'superAdmin' => mysqli_real_escape_string($mysqli, trim($decodedData['superAdmin'])),
//     'firstNameTeammate' => htmlspecialchars(strip_tags($decodedData['firstNameTeammate'])),
//     'lastNameTeammate' => htmlspecialchars(strip_tags($decodedData['lastNameTeammate'])),
//     'usernameTeammate' => htmlspecialchars(strip_tags($decodedData['usernameTeammate'])),
//     'mailTeammate' => htmlspecialchars(strip_tags($decodedData['mailTeammate'])),
//     'phoneTeammate' => htmlspecialchars(strip_tags($decodedData['phoneTeammate'])),
//     'passwordTeammate' => htmlspecialchars(strip_tags($decodedData['passwordTeammate'])),
//     'statusTeammate' => htmlspecialchars(strip_tags($decodedData['statusTeammate'])),
//     'teamManager' => htmlspecialchars(strip_tags($decodedData['teamManager'])),
//     'superAdmin' => htmlspecialchars(strip_tags($decodedData['superAdmin'])),
// ];



// On crée une nouvelle instance de connexion à la DB et on se connecte
// $db = new Database();
// $conn = $db->connect();

// // On crée une nouvelle instance de l'objet (ou classe) Post
// $post = new Manager($conn);

// // Si données en json
// $data = json_decode(file_get_contents("php://input"));
// $post->firstNameManager = $data->firstNameManager;
// $post->lastNameManager = $data->lastNameManager;
// $post->usernameManager = $data->usernameManager;
// $post->mailManager = $data->mailManager;
// $post->phoneManager = $data->phoneManager;
// $post->passwordManager = $data->passwordManager;
// $post->statusManager = $data->statusManager;

// if($post->createManager()) {
//     echo json_encode([
//         "message" => "Post succefully created",
//         "data" => [
//             "firstNameManager" => $post->firstNameManager,
//             "lastNameManager" => $post->lastNameManager,
//             "usernameManager" => $post->usernameManager,
//             "mailManager" => $post->mailManager,
//             "phoneManager" => $post->phoneManager,
//             "passwordManager" => $post->passwordManager,
//             "statusManager" => $post->statusManager
//         ]
//         ]);
// } else {
//     echo json_encode([
//         "message" => "Post could not be created"
//         ]);
// }
