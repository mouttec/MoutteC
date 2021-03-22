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
include_once "../../models/Agency.php";

// Si données en json
$agency = json_decode(file_get_contents("php://input"), true);


echo json_encode([$agency]);
// $agency = array();
// foreach ($decodedData as $key => $value) {
//     array_push($agency, array($key => $value));
// }

// $i = 0;
// while ($i < count($decodedData)) {
//     array_push($agency, array(key($decodedData) => current($decodedData)));
//     next($decodedData);
//     $i++;
// }


// $agency = array_combine(array_keys($decodedData), array_values($decodedData));

// for ($i = 0; $i < count($decodedData); $i++) {
//    array_push($agency, array( => $decodedData[$i])) 
// }

// $db = new Database();
// $conn = $db->connect();
// $agencyRequest = new Agency($conn);
// $agencyExists = $agencyRequest->searchAgency($agency->nameAgency);

// //On regarde quelle action de Read est demandée
// switch ($agency->action) {
//     case 'editAgency':
//         if (!empty($agencyExists)) {
//             $result = $agencyRequest->updateAgency($agency);
//         } else { 
//             $result = $agencyRequest->createAgency($agency);
//         }
//         break;
//     // case 'changePassword':
//     //     if (!empty($agencyExists) 
//     //         && (password_verify($oldPassword, $agency['mixedPassword']) 
//     //             || $_SESSION('superAdmin' == 1))) {
//     //         $agencyRequest->passwordUpdate($agency); 
//     //     }
//     //     break;
//     case 'deleteAgency':
//         $result = $agencyRequest->deleteAgency($agency->idAgency);
//         break;
//     default:
//     	$result = false;
//         break;
// }

// if ($result) {
//     echo json_encode([ "message" => "L'agence a été éditée !" ]);
// } else {
//     echo json_encode([ "message" => "L'agence n'a pas pu être éditée..." ]);
// }