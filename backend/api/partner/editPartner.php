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
    array_push($partner[$key] = htmlspecialchars(strip_tags($value)));
}

$db = new Database();
$conn = $db->connect();
$partnerRequest = new Partner($conn);
$partnerExists = $partnerRequest->searchPartner($partner['usernamePartner']);

//On regarde quelle action de Read est demandée
switch ($partner['action']) {
    case 'editPartner':
        if (!empty($partnerExists)) {
            $result = $partnerRequest->updatePartner($partner);
        } else { 
            $result = $partnerRequest->createPartner($partner);
        }
        break;
    case 'changePassword':
    //On vérifie que le Teammate existe et on demande l'ancien mot de passe, voir eventuellement si une session super admin est ouverte à modifier sans l'ancien mdp
        if (!empty($partnerExists) 
            && (password_verify($oldPassword, $partner['mixedPassword']) 
                || $_SESSION('superAdmin' == 1))) {
            $partnerRequest->passwordUpdate($partner); 
        }
        break;
    case 'deletePartner':
        $result = $partnerRequest->deletePartner($partner['idPartner']);
        break;
    default:
    	$result = false;
        break;
}

if ($result) {
    echo json_encode([ "message" => "Le partenaire a été édité !" ]);
} else {
    echo json_encode([ "message" => "Le partenaire n'a pas pu être édité..." ]);
}