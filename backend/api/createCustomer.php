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
include_once "../config/Database.php";
include_once "../models/Customer.php";

// On crée une nouvelle instance de connexion à la DB et on se connecte
$db = new Database();
$conn = $db->connect();

// On crée une nouvelle instance de l'objet (ou classe) Post
$post = new Customer($conn);

// Si données en json
$data = json_decode(file_get_contents("php://input"));
$post->firstNameCustomer = $data->firstNameCustomer;
$post->lastNameCustomer = $data->lastNameCustomer;
$post->phoneCustomer = $data->phoneCustomer;
$post->mailCustomer = $data->mailCustomer;
$post->passwordCustomer = $data->passwordCustomer;

if($post->createCustomer()) {
    echo json_encode([
        "message" => "Customer succefully created",
        "data" => [
            "firstNameCustomer" => $post->firstNameCustomer,
            "lastNameCustomer" => $post->lastNameCustomer,
            "phoneCustomer" => $post->phoneCustomer,
            "mailCustomer" => $post->mailCustomer,
            "passwordCustomer" => $post->passwordCustomer
        ]
        ]);
} else {
    echo json_encode([
        "message" => "Customer could not be created"
        ]);
}
