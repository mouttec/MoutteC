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
    } else {        
        $customer->mailCustomer = "Non renseigné";
    }
    if (isset($decodedData->dateOfBirthdayCustomer)) {
        $customer->dateOfBirthdayCustomer = $decodedData->dateOfBirthdayCustomer;
    } else {
        $customer->dateOfBirthdayCustomer = "Non renseigné";
    }
    $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $maxLength = strlen($chars);
    $randomStr = '';
    for ($i = 0; $i < 30; $i++) {
        $randomStr .= $chars[rand(0, $maxLength - 1)];
    }
    $customer->mixedPassword = $randomStr;
    $customer->createCustomer($customer);
    //idCustomer créée
    $thisCustomer = new Customer($conn);
    $thisCustomer->firstNameCustomer = $decodedData->firstNameCustomer;
    $thisCustomer->lastNameCustomer = $decodedData->lastNameCustomer;
    $thisCustomer = $thisCustomer->searchCustomerByNames($thisCustomer);
} else {
    $customer->idCustomer = $decodedData->idCustomer;
    $thisCustomer = $customer->searchCustomerById($customer);
}

if (empty($decodedData->idCar)) {
    $car->idCustomer = $thisCustomer->idCustomer;
    $car->licensePlateCar = $decodedData->licensePlateCar;
    $car->brandCar = $decodedData->brandCar;
    $car->modelCar = $decodedData->modelCar;
    $car->dateOfCirculationCar = $decodedData->dateOfCirculationCar;
    $car->motorizationCar = $decodedData->motorizationCar;
    $car->createCar($car);
    $thisCar = $car->searchCarByPlate($car);
    //$thisCar->idCar créé
} else {
    $car->idCar = $decodedData->idCar;
    $thisCar = $car->searchCarById($car);
}

if (!empty($decodedData->addressStreetNumber)) {
    //adresse aller = domicile client > partenaire
    $address->idCustomer = $thisCustomer->idCustomer;
    $address->address = $decodedData->address;
    $address->createAddress($address);
    $addressForthId = $address->searchAddressId($address);
}

if (!empty($decodedData->addressBackStreetNumber)) {
    //adresse retour = partenaire > domicile client
    $address->idCustomer = $thisCustomer->idCustomer;
    $address->address = $decodedData->address;
    $address->createAddress($address);
    $addressBackId = $address->searchAddressId($address);
}

if (!empty($decodedData->addressBilling)) {
    //adresse retour = partenaire > domicile client
    $address->idCustomer = $thisCustomer->idCustomer;
    $address->address = $decodedData->address;
    $address->createAddress($address);
    $addressBackId = $address->searchAddressId($address);
}

$booking->idCustomer = $thisCustomer->idCustomer;
$booking->idPartner = $decodedData->idPartner;
$booking->hoursBooking = $decodedData->hoursBooking;
$booking->dateBooking = $decodedData->dateBooking;
$booking->formulaBooking = $decodedData->formulaBooking;
$booking->statusBooking = $decodedData->statusBooking;
$booking->dateReturn = $decodedData->dateReturn;
$booking->hoursReturn = $decodedData->hoursReturn;
$booking->idCar = $thisCar->idCar;
$booking->idPickupAddress = $addressForthId;
$booking->idReturnAddress = $addressBackId;
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