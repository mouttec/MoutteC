<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/carProcess.php";

$db = new Database();
$conn = $db->connect();
$carProcess = new carProcess($conn);

$decodedData = json_decode(file_get_contents("php://input"));

if (isset($decodedData->idProcess)) {
	$carProcess->idProcess = $decodedData->idProcess;
	$carProcess->carStatus .= 1;
	$result = $carProcess->updateCarProcessStatus($carProcess);
}

if ($result) {
    echo json_encode([ "message" => "Étape validée !" ]);
} else {
    echo json_encode([ "message" => "Un problème est survenu..." ]);
}

/*
EN ATTENTE
• Etape 1 : Prendre en charge / en attente

REMISE DU VEHICULE A MOUTTEC 
• Etape 2 : Prendre la carte d’identité / prise en charge par Mouttec
• Etape 3 : Prendre la video / prise en charge par Mouttec
• Etape 4 : Etablir la fiche d’état des lieux / prise en charge par Mouttec

VEHICULE EN TRANSIT VERS LE PARTNER
• Etape 5 : En route chez le partner / à bientôt à destination

DEPOT DU VEHICULE AU PARTNER/VEHICULE CHEZ LE PARTNER
• Etape 6 : Arrivé chez le partner / arrivé
• Etape 7 : Prendre la video / dans nos locaux
• Etape 8 : Etablir la fiche d’état des lieux / dans nos locaux

TRAVAUX EN COURS
• Etape 9 : Chez le partner / travaux en cours

TRAVAUX TERMINES / PAIEMENT EN ATTENTE
• Etape 10 : Chez le partner / travaux fini
• Etape 11 : Chez le partner / paiment validé

VEHICULE DISPONILBLE / TRAVAUX TERMINES - VEHICULE EN ATTENTE
• Etape 12 : Chez le partner / véhicule disponible
• Etape 13 : Véhicule disponible / véhicule en attente
• Etape 14 : Prendre en charge / Driver en approche

PRISE EN CHARGE DU VEHICULE PAR LE DRIVER / RECUPERATION DU VEHICULE PAR MOUTTEC
• Etape 15 : Prendre la video / prise charge par Mouttec
• Etape 16 : Etablir la fiche d’état des lieux / prise en charge par Mouttec

VEHICULE EN RETOUR
• Etape 17 : En route chez le client / prise en charge par Mouttec

VEHICULE EN RESTITUTION
• Etape 18 : Vérification de la carte d’identité / véhicule en cours de restitution
• Etape 19 : Prendre la video / véhicule en cours de restitution
• Etape 20 : Etablir la fiche d’état des lieux / véhicule en cours de restitution

VEHICULE RESTITUE
• Etape 21 : Véhicule restitué / véhicule restitué
*/