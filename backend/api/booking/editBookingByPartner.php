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

$decodedData = json_decode(file_get_contents("php://input"));

$customer = new Customer($conn);
if (!isset($decodedData->idCustomer)) {
    $customer->firstNameCustomer = $decodedData->firstNameCustomer;
    $customer->lastNameCustomer = $decodedData->lastNameCustomer;
    $customer->phoneCustomer = $decodedData->phoneCustomer;
    $customer->statusCustomer = "Client créé par un partenaire";
    if (isset($decodedData->mailCustomer)) {
        $customer->mailCustomer = $decodedData->mailCustomer;
    } else {
        $customer->mailCustomer = "Non renseigné";
    }
    if (isset($decodedData->dateOfBirthdayCustomer)) {
        $customer->dateOfBirthdayCustomer = $decodedData->dateOfBirthdayCustomer;
    } else {
        $customer->dateOfBirthdayCustomer = "Non renseigné";
    }
    //Création du mot de passe temporaire
    $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $maxLength = strlen($chars);
    $randomStr = '';
    for ($i = 0; $i < 50; $i++) {
        $randomStr .= $chars[rand(0, $maxLength - 1)];
    }
    $customer->mixedPassword = $randomStr;
    $customer->createCustomer($customer);
    $thisCustomer = $customer->searchCustomerByNames($customer);
    extract($thisCustomer);
    $thisCustomerId = $idCustomer;
} else {
    $customer->idCustomer = $decodedData->idCustomer;
    $thisCustomer = $customer->searchCustomerById($customer);
    $thisCustomerId = $thisCustomer->idCustomer;
}

$car = new Car($conn);
if (!isset($decodedData->idCar)) {
    $car->idCustomer = $thisCustomerId;
    $car->licensePlateCar = $decodedData->licensePlateCar;
    $car->brandCar = $decodedData->brandCar;
    $car->modelCar = $decodedData->modelCar;
    $car->dateOfCirculationCar = $decodedData->dateOfCirculationCar;
    $car->motorizationCar = $decodedData->motorizationCar;
    $car->createCar($car);
    $thisCar = $car->searchCarByPlate($car);
    extract($thisCar);
    $thisCarId = $idCar;
} else {
    $car->idCar = $decodedData->idCar;
    $thisCar = $car->searchCarById($car);
    $thisCarId = $thisCar->idCar;
}

$address = new Address($conn);
if (!empty($decodedData->addressForthStreetName)) {
    //adresse aller = domicile client > partenaire
    $address->idCustomer = $thisCustomerId;
    $address->addressStreetNumber = $decodedData->addressForthStreetNumber;
    $address->addressStreetName = $decodedData->addressForthStreetName;
    $address->addressStreetType = $decodedData->addressForthStreetType;
    $address->addressStreetComplement = $decodedData->addressForthStreetComplement;    
    $address->addressZip = $decodedData->addressForthZip;
    $address->addressCity = $decodedData->addressForthCity;
    $address->createAddress($address);
    $addressForth = $address->searchAddressByDetails($address);
    extract($addressForth);
    $addressForthId = $idAddress;
}

if (!empty($decodedData->addressBackStreetName)) {
    //adresse retour = partenaire > domicile client
    $address->idCustomer = $thisCustomerId;
    $address->addressStreetNumber = $decodedData->addressBackStreetNumber;
    $address->addressStreetName = $decodedData->addressBackStreetName;
    $address->addressStreetType = $decodedData->addressBackStreetType;
    $address->addressBackStreetComplement = $decodedData->addressBackStreetComplement;    
    $address->addressZip = $decodedData->addressBackZip;
    $address->addressCity = $decodedData->addressBackCity;
    $address->createAddress($address);
    $addressBack = $address->searchAddressByDetails($address);
    extract($addressBack);
    $addressBackId = $idAddress;
}

$booking = new Booking($conn);

$booking->idCustomer = $thisCustomerId;
$booking->idPartner = $decodedData->idPartner;
$booking->hoursForth = $decodedData->hoursForth;
$booking->dateForth = $decodedData->dateForth;
$booking->formulaBooking = $decodedData->formulaBooking;
$booking->statusBooking = $decodedData->statusBooking;
$booking->dateBack = $decodedData->dateBack;
$booking->hoursBack = $decodedData->hoursBack;
$booking->idCar = $thisCarId;
$booking->idForthAddress = $addressForthId;
$booking->idBackAddress = $addressBackId;
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