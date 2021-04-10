<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Booking.php";
include_once "../../models/Customer.php";
include_once "../../models/Car.php";
include_once "../../models/Address.php";

$db = new Database();
$conn = $db->connect();
$booking = new Booking($conn);
$customer = new Customer($conn);
$car = new Car($conn);
$address = new Address($conn);

$decodedData = json_decode(file_get_contents("php://input"));

if (empty($decodedData->idCustomer)) {
    $customer->firstNameCustomer = $decodedData->firstNameCustomer;
    $customer->lastNameCustomer = $decodedData->lastNameCustomer;
    $customer->phoneCustomer = $decodedData->phoneCustomer;
    if (isset($decodedData->mailCustomer)) {
        $customer->mailCustomer = $decodedData->mailCustomer;
    }    
    if (isset($decodedData->dateOfBirthdayCustomer)) {
        $customer->dateOfBirthdayCustomer = $decodedData->dateOfBirthdayCustomer;
    }
    $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $maxLength = strlen($chars);
    $randomStr = '';
    for ($i = 0; $i < 30; $i++) {
        $randomStr .= $chars[rand(0, $maxLength - 1)];
    }
    $customer->mixedPassword = $randomStr;
    $thisCustomer = $customer->createCustomer($customer);
    // $thisCustomer->idCustomer créé
} else {
    $customer->idCustomer = $decodedData->idCustomer;
    $thisCustomer = $customer->searchCustomerById($customer);
}

if (empty($decodedData->idCar) {
    $car->idCustomer = $thisCustomer->idCustomer;
    $car->licensePlateCar = $decodedData->licensePlateCar;
    $car->brandCar = $decodedData->brandCar;
    $car->modelCar = $decodedData->modelCar;
    $car->dateOfCirculationCar = $decodedData->dateOfCirculationCar;
    $car->motorizationCar = $decodedData->motorizationCar;
    $thiscar = $car->createCar($car);
    //$thisCar->idCar créé
} else {
    $car->idCar = $decodedData->idCar;
    $thisCar = $car->searchCarById($car);
}

if (!empty($decodedData->addressStreetNumber)) {
    //adresse domicile client > partenaire
    $address->idCustomer = $thisCustomer->idCustomer;
    $address->addressStreetNumber = $decodedData->addressStreetNumber;
    $address->addressStreetType = $decodedData->addressStreetType;
    $address->addressStreetName = $decodedData->addressStreetName;
    $address->addressStreetComplement = $decodedData->addressStreetComplement;
    $address->addressZip = $decodedData->addressZip;
    $address->addressCity = $decodedData->addressCity;
    $addressForth = $address->createAddress($address);
}

if (!empty($decodedData->addressBackStreetNumber)) {
    //adresse partenaire > domicile client
    $address->idCustomer = $thisCustomer->idCustomer;
    $address->addressStreetNumber = $decodedData->addressBackStreetNumber;
    $address->addressStreetType = $decodedData->addressBackStreetType;
    $address->addressStreetName = $decodedData->addressBackStreetName;
    $address->addressStreetComplement = $decodedData->addressBackStreetComplement;
    $address->addressZip = $decodedData->addressBackZip;
    $address->addressCity = $decodedData->addressBackCity;
    $addressBack = $address->createAddress($address);
}

$booking->idCustomer = $thisCustomer->idCustomer;
$booking->idPartner = $decodedData->idPartner;
$booking->hoursBooking = $decodedData->hoursBooking;
$booking->dateBooking = $decodedData->dateBooking;
$booking->formulaBooking = $decodedData->formulaBooking;
$booking->dateReturn = $decodedData->dateReturn;
$booking->hoursReturn = $decodedData->hoursReturn;
$booking->idCar = $thisCar->idCar;
$booking->idPickupAddress = $addressForth->idAddress;
$booking->idReturnAddress = $decodedData->idAddress;
$booking->idAgency = $decodedData->idAgency;
$booking->distanceForth = $decodedData->distanceForth;
$booking->durationForth = $decodedData->durationForth;
$booking->distanceBack = $decodedData->distanceBack;
$booking->durationBack = $decodedData->durationBack;

$result = $booking->createBooking($booking);

if ($result) {
    echo json_encode([ "message" => "La réservation a été créée !" ]);
} else {     
    echo json_encode([ "message" => "La réservation n'a pas pu être créée..." ]);
}