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
include_once "../../models/Manager.php";

// On crée une nouvelle instance de connexion à la DB et on se connecte
$db = new Database();
$conn = $db->connect();

// On crée une nouvelle instance de l'objet (ou classe) Post
$post = new Manager($conn);

// Si données en json
$data = json_decode(file_get_contents("php://input"));
$post->idManager = $data->idManager;
$post->firstNameManager = $data->firstNameManager;
$post->lastNameManager = $data->lastNameManager;
$post->usernameManager = $data->usernameManager;
$post->mailManager = $data->mailManager;
$post->phoneManager = $data->phoneManager;
$post->passwordManager = $data->passwordManager;
$post->statusManager = $data->statusManager;

if($post->updateManager($post->idManager)) {
    echo json_encode([
        "success" => true,
        "data" => [
            "idManager" => $post->idManager,
            "firstNameManager" => $post->firstNameManager,
            "lastNameManager" => $post->lastNameManager,
            "usernameManager" => $post->usernameManager,
            "mailManager" => $post->mailManager,
            "phoneManager" => $post->phoneManager,
            "passwordManager" => $post->passwordManager,
            "statusManager" => $post->statusManager
        ],
        "message" => "Post successfully updated"
        ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Post could not updated"
        ]);
}