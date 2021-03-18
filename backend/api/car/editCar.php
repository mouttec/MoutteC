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
include_once "../../models/Car.php";

// Si données en json
$decodedData = json_decode(file_get_contents("php://input"));
$car = array();
foreach ($decodedData as $key => $value) {
    array_push($car[$key] =  htmlspecialchars(strip_tags($value)));
}

$db = new Database();
$conn = $db->connect();
$carRequest = new Car($conn);
$carExist = $carRequest->searchCar($car['licensePlateCar']);

//On regarde quelle action de Read est demandée
switch ($car['action']) {
    case 'editCar':
        !empty($carExist) : $result = $carRequest->updateCar($car) ? $result = $carRequest->createCar($car);
        break;
    case 'deleteCar':
        $result = $carRequest->deleteCar($car['idCar']);
        break;
    default:
        $result = false;
        break;
}
$result : echo json_encode([ "message" => "Le véhicule a été édité !" ]) ? echo json_encode([ "message" => "Le véhicule n'a pas pu être édité..." ]);
// !empty($carExist) : $result = $carRequest->updateCar($car) ? $result = $carRequest->createCar($car);

// if (isset($car['licensePlateCar']) && !empty($car['licensePlateCar'])) {
//     !empty($carExist) : 
//     $result : echo json_encode([ "message" => "Le véhicule a été édité !" ]) ? echo json_encode([ "message" => "Le véhicule n'a pas pu être édité..." ]);
//     }
// } else {
//     http_response_code(404);
// }