<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Car.php";

$db = new Database();
$conn = $db->connect();
$car = new Car($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$car->idCustomer = $decodedData->idCustomer;
$car->licensePlateCar = $decodedData->licensePlateCar;
$car->brandCar = $decodedData->brandCar;
$car->modelCar = $decodedData->modelCar;
$car->dateOfCirculationCar = $decodedData->dateOfCirculationCar;
$car->motorizationCar = $decodedData->motorizationCar;
$filenameCar = $decodedData->filenameCar;
$car->urlGrayCard = $car->idCustomer."/". $filenameCar;

$car->urlGrayCard = $decodedData->urlGrayCard;

if(!empty($decodedData->idCar)) {
    $car->idCar = $decodedData->idCar;
    $result = $car->updateCar($car);
} else {
    $result = $car->createCar($car);
}

if ($result) {
    echo json_encode([ "message" => "Le véhicule a été édité !" ]);
}  else { 
    echo json_encode([ "message" => "Le véhicule n'a pas pu être édité..." ]);
}