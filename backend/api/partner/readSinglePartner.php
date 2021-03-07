<?php

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

// On envoie les headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");

// On inclus les objets (ou classes) nécessaires
include_once "../../config/Database.php";
include_once "../../models/Partner.php";

// On crée une nouvelle instance de connexion à la DB et on se connecte
$db = new Database();
$conn = $db->connect();

// On crée une nouvelle instance de l'objet (ou classe) Post
$post = new Partner($conn);

// On récupère l'ID dans l'url
// On utilise un opérateur ternaire mais on pourrait très bien utiliser un if()
$post->idPartner = isset($_GET['idPartner']) ? $_GET['idPartner'] : die();

// On utilise la méthode read_single_post() de l'objet Post
$result = $post->readSinglePartner();
if($result) {
    // On encode en JSON et on affiche
    echo json_encode([
        "success" => true,
        "data" => $result
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "No post found with idPartner $post->idPartner"
    ]);
}