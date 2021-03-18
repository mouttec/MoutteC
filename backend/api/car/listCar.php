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
include_once "../../models/Car.php";

//!\\ Est-ce que l'on récupère une $data ?
$decodedData = json_decode(file_get_contents("php://input"));
$car = array();
foreach ($decodedData as $key => $value) {
    array_push($car[$key] =  htmlspecialchars(strip_tags($value)));
}

$db = new Database();
$conn = $db->connect();
$carRequest = new Car($conn);

//On regarde quelle action de Read est demandée
switch ($car['action']) {
    case 'listCustomerCars':
        $result = $carRequest->listCustomerCars($car['idCustomer']);
        break;
    case 'searchCar':
        $result = $carRequest->searchCar($car['licensePlateCar']);
        break;
    default:
        $result = $carRequest->listCars();
        break;
}

(isset($result) && !empty($result)) : echo json_encode($result) ? http_response_code(404);