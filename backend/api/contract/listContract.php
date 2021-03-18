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
include_once "../../models/Contract.php";

//!\\ Est-ce que l'on récupère une $data ?
$decodedData = json_decode(file_get_contents("php://input"));
$contract = array();
foreach ($decodedData as $key => $value) {
    array_push($contract[$key] = htmlspecialchars(strip_tags($value)));
}

$db = new Database();
$conn = $db->connect();
$contractRequest = new Contract($conn);

//On regarde quelle action de Read est demandée
switch ($contract['action']) {
    case 'listPartnerContracts':
        $result = $contractRequest->listPartnerContracts($contract['idPartner']);
        break;
    case 'listCustomerContracts':
        $result = $contractRequest->listPartnerContracts($contract['idCustomer']);
        break;
    case 'listCarContracts':
        $result = $contractRequest->listPartnerContracts($contract['idCar']);
        break;
    case 'searchContract':
    //retourne un Contract et les Vidéos qui lui sont associées
        $contractVideos = new Video($conn);
        $result = [$contractRequest->searchContract($contract['idContract']), $contractVideos->searchContractVideos($contract['idContract'])];
        break;
    default:
        $result = $contractRequest->listVideos();
        break;
}

(isset($result) && !empty($result)) : echo json_encode($result) ? http_response_code(404);



// if (isset($decodedData['usernamePartner']) && !empty($decodedData['usernamePartner'])) {
//     $usernamePartner = htmlspecialchars(strip_tags($decodedData['usernamePartner']);
// }

// //Si usernamePartner est true, c'est qu'on en cherche un en particulier
// if ($usernamePartner) {
//     $partner = $partnerRequest->searchPartner($usernamePartner);
//     if ($partner) {
//         echo json_encode($partner);
//     } else {
//         http_response_code(404);
//     }
// } else {
//     $partners = $partnerRequest->listPartners();
//     if ($partners) {
//         echo json_encode($partners);
//     } else {
//         http_response_code(404);
//     }
// }






// // On utilise la méthode read() de l'objet Post
// $posts = $post->readPartner();
// // on compte le nombre de d'entrées
// $num = $posts->rowCount();
// // S'il y a au moins 1 entrée
// if($num > 0) {
//     // on crée un tableau vide
//     $posts_arr = [];
//     while($row = $posts->fetch()) {
//         // On extrait les données dans des variables
//         // reference : https://www.php.net/manual/en/function.extract.php
//         extract($row);
//         // On crée un tableau qui représente un post
//         $post_item = [
//             "idPartner" => $idPartner,
//             "namePartner" => html_entity_decode($namePartner),
//             "numberAddressPartner" => $numberAddressPartner,
//             "typeAddressPartner" => $typeAddressPartner,
//             "nameAddressPartner" => $nameAddressPartner,
//             "complementAddressPartner" => $complementAddressPartner,
//             "zipAddressPartner" => $zipAddressPartner,
//             "cityAddressPartner" => $cityAddressPartner,
//             "phonePartner" => $phonePartner,
//             "statusPartner" => $statusPartner,
//             "mailPartner" => $mailPartner,
//             "nameBilling" => $nameBilling,
//             "siretPartner" => $siretPartner,
//             "numberBilling" => $numberBilling,
//             "typeAddressBilling" => $typeAddressBilling,
//             "nameAddressBilling" => $nameAddressBilling,
//             "complementAddressBilling" => $complementAddressBilling,
//             "zipAddressBilling" => $zipAddressBilling,
//             "cityAddressBilling" => $cityAddressBilling,
//             "datePartner" => $datePartner
//         ];
//         // On push chaque post dans le tableau $post_arr
//         array_push($posts_arr, $post_item);
//     }
//     // On encode en JSON et on affiche
//     echo json_encode(
//         // "success" => true,
//         // "data" => 
//         $posts_arr
//     );
// } else {
//     // S'il n'y a aucune entrée, on renvoie une réponse au format JSON
//     echo json_encode([
//         "success" => false,
//         "message" => "No posts found"
//     ]);
// }