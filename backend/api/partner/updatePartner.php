<?php

//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

// On envoie les headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");

// On inclus les objets (ou classes) nécessaires
include_once "../../config/Database.php";
include_once "../../models/Partner.php";

// On crée une nouvelle instance de connexion à la DB et on se connecte
$db = new Database();
$conn = $db->connect();

// On crée une nouvelle instance de l'objet (ou classe) Post
$post = new Partner($conn);

// Si données en json
$data = json_decode(file_get_contents("php://input"));
$post->idPartner = $date->idPartner;
$post->namePartner = $date->namePartner;
$post->numberAddressPartner = $date->numberAddressPartner;
$post->typeAddressPartner = $date->typeAddressPartner;
$post->nameAddressPartner = $date->nameAddressPartner;
$post->complementAddressPartner = $date->complementAddressPartner;
$post->zipAddressPartner = $date->zipAddressPartner;
$post->cityAddressPartner = $date->cityAddressPartner;
$post->phonePartner = $date->phonePartner;
$post->statusPartner = $date->statusPartner;
$post->nameBilling = $date->nameBilling;
$post->siretPartner = $date->siretPartner;
$post->numberAddressBilling = $date->numberAddrerssBilling;
$post->typeAddressBilling = $date->typeAddressBilling;
$post->nameAddressBilling = $date->nameAddressBilling;
$post->complementAddressBilling = $date->complementAddressBilling; 
$post->zipAddressBilling = $date->zipAddressBilling;
$post->cityAddressBilling = $date->cityAddressBilling;

if($post->updatePartner($post->idPartner)) {
    echo json_encode([
        "success" => true,
        "data" => [
            "idPartner" => $post->idPartner,
            "namePartner" => $post->namePartner,
            "numberAddressPartner" => $post->numberAddressPartner,
            "typeAddressPartner" => $post->typeAddressPartner,
            "nameAddressPartner" => $post->nameAddressPartner,
            "complementAddressPartner" => $post->complementAddressPartner,
            "zipAddressPartner" => $post->zipAddressPartner,
            "cityAddressPartner" => $post->cityAddressPartner,
            "phonePartner" => $post->phonePartner,
            "statusPartner" => $post->statusPartner,
            "mailPartner" => $post->mailPartner,
            "nameBilling" => $post->nameBilling,
            "siretPartner" => $post->siretPartner,
            "numberAddressBilling" => $post->numberAddressBilling,
            "typeAddressBilling" => $post->typeAddressBilling,
            "nameAddressBilling" => $post->nameAddressBilling,
            "complementAddressBilling" => $post->complementAddressBilling,
            "zipAddressBilling" => $post->zipAddressBilling,
            "cityAddressBilling" => $post->cityAddressBilling
        ],
        "message" => "Post successfully updated"
        ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Post could not updated"
        ]);
}