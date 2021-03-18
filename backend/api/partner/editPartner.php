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
include_once "../../models/Partner.php";

// Si données en json
$decodedData = json_decode(file_get_contents("php://input"));

$partner = array();
foreach ($decodedData as $key => $value) {
    array_push($partner[$key] =  htmlspecialchars(strip_tags($value)));
}

$db = new Database();
$conn = $db->connect();
$partnerRequest = new Partner($conn);

$partnerExists = $partnerRequest->searchPartner($partner['usernamePartner']);

//On regarde quelle action de Read est demandée
switch ($partner['action']) {
    case 'editPartner':
        !empty($partnerExists) : $result = $partnerRequest->updatePartner($partner) ? $result = $partnerRequest->createPartner($partner);
        break;
    case 'changePassword':
    //On vérifie que le Teammate existe et on demande l'ancien mot de passe, voir eventuellement si une session super admin est ouverte à modifier sans l'ancien mdp
        (!empty($partnerExists) && (password_verify($oldPassword, $partner['mixedPassword']) || $_SESSION('superAdmin' == 1)) : $partnerRequest->passwordUpdate($partner);
        break;
    case 'deletePartner':
        $result = $partnerRequest->deletePartner($partner['idPartner']);
        break;
    default:
    	$result = false;
        break;
}
$result : echo json_encode([ "message" => "Le partenaire a été édité !" ]) ? echo json_encode([ "message" => "Le partenaire n'a pas pu être édité..." ]);

//!empty($partnerExist) : $result = $partnerRequest->updatePartner($partner) ? $result = $partnerRequest->createPartner($partner);

// if (isset($partner['usernamePartner']) && !empty($partner['usernamePartner'])) {
//     $partnerExist = $partnerRequest->searchPartner($partner['usernamePartner']);
//     $partnerExist : $result = $partnerRequest->updatePartner($partner) ? $result = $partnerRequest->createPartner($partner);
//     return $result;
// } else {    
//     echo json_encode([ "message" => "Le Partenaire n'a pas pu être édité..." ]);
// }



// $partner = [
//     'usernamePartner' = htmlspecialchars(strip_tags($decodedData->usernamePartner)),
//     'namePartner' = htmlspecialchars(strip_tags($decodedData->namePartner)),
//     'numberAddressPartner' = htmlspecialchars(strip_tags($decodedData->numberAddressPartner)),
//     'typeAddressPartner' = htmlspecialchars(strip_tags($decodedData->typeAddressPartner)),
//     'nameAddressPartner' = htmlspecialchars(strip_tags($decodedData->nameAddressPartner)),
//     'complementAddressPartner' = htmlspecialchars(strip_tags($decodedData->complementAddressPartner)),
//     'zipAddressPartner' = htmlspecialchars(strip_tags($decodedData->zipAddressPartner)),
//     'cityAddressPartner' = htmlspecialchars(strip_tags($decodedData->cityAddressPartner)),
//     'phonePartner' = htmlspecialchars(strip_tags($decodedData->phonePartner)),
//     'statusPartner' => htmlspecialchars(strip_tags($decodedData->statusPartner)),
//     'typePartner' => htmlspecialchars(strip_tags($decodedData->typePartner)),
//     'nameBilling' = htmlspecialchars(strip_tags($decodedData->nameBilling)),
//     'siretPartner' = htmlspecialchars(strip_tags($decodedData->siretPartner)),
//     'numberAddressBilling' = htmlspecialchars(strip_tags($decodedData->numberAddrerssBilling)),
//     'typeAddressBilling' = htmlspecialchars(strip_tags($decodedData->typeAddressBilling)),
//     'nameAddressBilling' = htmlspecialchars(strip_tags($decodedData->nameAddressBilling)),
//     'complementAddressBilling' = htmlspecialchars(strip_tags($decodedData->complementAddressBilling)), 
//     'zipAddressBilling' = htmlspecialchars(strip_tags($decodedData->zipAddressBilling)),
//     'cityAddressBilling' = htmlspecialchars(strip_tags($decodedData->cityAddressBilling)),
// ]

// // On crée une nouvelle instance de connexion à la DB et on se connecte
// $db = new Database();
// $conn = $db->connect();
// $partnerRequest = new Partner($conn);