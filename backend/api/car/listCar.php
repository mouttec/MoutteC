<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Car.php";

$db = new Database();
$conn = $db->connect();
$car = new Car($conn);

if (isset($_GET['idCar'])) {
    $car->idCar = $_GET['idCar'];
    $result = $car->searchCarById($car);
} elseif (isset($_GET['licensePlateCar'])) {
    $car->licensePlateCar = $_GET['licensePlateCar'];
    $result = $car->searchCarByPlate($car);
} else {
    if (isset($_GET['idCustomer'])) {
        $car->idCustomer = $_GET['idCustomer'];
        $cars = $car->searchCarsByCustomer($car);
    } else {
        $cars = $car->listCars();
    }
    $counter = $cars->rowCount();
    if ($counter > 0) {
        $cars_array = array();
        while ($row = $cars->fetch()) {
            extract($row);
            $car_item = [
                 "idCar" => $idCar,
                 "idCustomer" => $idCustomer,
                 "licensePlateCar" => $licensePlateCar,
                 "brandCar" => $brandCar,
                 "modelCar" => $modelCar,
                 "dateOfCirculationCar" => $dateOfCirculationCar,
                 "motorizationCar" => $motorizationCar,
                 "urlGrayCard" => $urlGrayCard
            ];
            array_push($cars_array, $car_item);
        }
        $result = $cars_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}