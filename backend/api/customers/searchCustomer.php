<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Customer.php";
include_once "../../models/Car.php";
include_once "../../models/Address.php";

$db = new Database();
$conn = $db->connect();

if (isset($_GET['idCustomer'])) {
    $customerData = array();
    
    $customer = new Customer($conn);
    $customer->idCustomer = $_GET['idCustomer'];
    $thisCustomer = $customer->searchCustomerById($customer);
    array_push($customerData, $thisCustomer);

    $address = new Address($conn);
    $address->idCustomer = $_GET['idCustomer'];
    $addresses = $address->listAddressesByCustomer($thisCustomer);
    $counter = $addresses->rowCount();
    if ($counter > 0) {
        $addresses_array = array();
        while($row = $addresses->fetch()) {
            extract($row);
            $address_item = [
                "idCustomer" => $idCustomer,
                "addressStreetNumber" => $addressStreetNumber,
                "addressStreetType" => $addressStreetType,
                "addressStreetName" => $addressStreetName,
                "addressStreetComplement" => $addressStreetComplement,
                "addressZip" => $addressZip,
                "addressCity" => $addressCity
            ];
            array_push($addresses_array, $address_item);
        }
        array_push($customerData, $addresses_array);
    }
 
    $car = new Car($conn);
    $car->idCustomer = $_GET['idCustomer'];
    $cars = $car->searchCarsByCustomer($thisCustomer);
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
        array_push($customerData, $cars_array);
    }
}

if (isset($customerData)) {
    echo json_encode($customerData);
} else { 
    http_response_code(404); 
}