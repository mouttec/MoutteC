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
include_once "../../models/Manager.php";

// On crée une nouvelle instance de connexion à la DB et on se connecte
$db = new Database();
$conn = $db->connect();

// On crée une nouvelle instance de l'objet (ou classe) Post
$post = new Manager($conn);

// On récupère l'ID dans l'url
// On utilise un opérateur ternaire mais on pourrait très bien utiliser un if()
$post->idManager = isset($_GET['idManager']) ? $_GET['idManager'] : die();

// On utilise la méthode read_single_post() de l'objet Post
$result = $post->readSingleManager();
if($result) {
    // On encode en JSON et on affiche
    echo json_encode([
        "success" => true,
        "data" => $result
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "No post found with idManager $post->idManager"
    ]);
}