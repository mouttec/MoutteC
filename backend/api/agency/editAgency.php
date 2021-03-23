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

$db = new Database();
$conn = $db->connect();
$agency = new Agency($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$agency->nameAgency = $decodedData->nameAgency;
$agency->numberAddressAgency = $decodedData->numberAddressAgency;
$agency->typeAddressAgency = $decodedData->typeAddressAgency;
$agency->nameAddressAgency = $decodedData->nameAddressAgency;
$agency->complementAddressAgency = $decodedData->complementAddressAgency;
$agency->zipAddressAgency = $decodedData->zipAddressAgency;
$agency->cityAddressAgency = $decodedData->cityAddressAgency;
$agency->phoneAgency = $decodedData->phoneAgency;
$agency->mailAgency = $decodedData->mailAgency;
$agency->statusAgency = $decodedData->statusAgency;

$action = htmlspecialchars(strip_tags($decodedData->action));

if (isset($_GET['idAgency'])) {
    $agency->idAgency = htmlspecialchars(strip_tags($_GET['idAgency']));
    $isAgencyExists = $agency->searchAgency();
}
//On regarde quelle action de Read est demandée
switch ($action) {
    case 'editAgency':
        if (!empty($isAgencyExists)) {
            $result = $agency->updateAgency($agency);
        } else { 
            $result = $agency->createAgency($agency);
        }
        break;
    // case 'changePassword':
    //     if (!empty($agencyExists) 
    //         && (password_verify($oldPassword, $agency['mixedPassword']) 
    //             || $_SESSION('superAdmin' == 1))) {
    //         $agencyRequest->passwordUpdate($agency); 
    //     }
    //     break;
    case 'deleteAgency':
        $agency->idAgency = $decodedData->idAgency;
        $result = $agency->deleteAgency($agency->idAgency);
        break;
    default:
    	$result = false;
        break;
}

if ($result) {
    echo json_encode([ "message" => "L'agence a été éditée !" ]);
} else {
    echo json_encode([ "message" => "L'agence n'a pas pu être éditée..." ]);
}