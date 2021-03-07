<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
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
// On utilise la méthode read() de l'objet Post
$posts = $post->readPartner();
// on compte le nombre de d'entrées
$num = $posts->rowCount();
// S'il y a au moins 1 entrée
if($num > 0) {
    // on crée un tableau vide
    $posts_arr = [];
    while($row = $posts->fetch()) {
        // On extrait les données dans des variables
        // reference : https://www.php.net/manual/en/function.extract.php
        extract($row);
        // On crée un tableau qui représente un post
        $post_item = [
            "idPartner" => $idPartner,
            "namePartner" => html_entity_decode($namePartner),
            "numberAddressPartner" => $numberAddressPartner,
            "typeAddressPartner" => $typeAddressPartner,
            "nameAddressPartner" => $nameAddressPartner,
            "complementAddressPartner" => $complementAddressPartner,
            "zipAddressPartner" => $zipAddressPartner,
            "cityAddressPartner" => $cityAddressPartner,
            "phonePartner" => $phonePartner,
            "statusPartner" => $statusPartner,
            "mailPartner" => $mailPartner,
            "nameBilling" => $nameBilling,
            "siretPartner" => $siretPartner,
            "numberBilling" => $numberBilling,
            "typeAddressBilling" => $typeAddressBilling,
            "nameAddressBilling" => $nameAddressBilling,
            "complementAddressBilling" => $complementAddressBilling,
            "zipAddressBilling" => $zipAddressBilling,
            "cityAddressBilling" => $cityAddressBilling,
            "datePartner" => $datePartner
        ];
        // On push chaque post dans le tableau $post_arr
        array_push($posts_arr, $post_item);
    }
    // On encode en JSON et on affiche
    echo json_encode(
        // "success" => true,
        // "data" => 
        $posts_arr
    );
} else {
    // S'il n'y a aucune entrée, on renvoie une réponse au format JSON
    echo json_encode([
        "success" => false,
        "message" => "No posts found"
    ]);
}