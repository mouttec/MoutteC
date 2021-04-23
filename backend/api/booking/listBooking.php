<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Booking.php";
include_once "../../models/Customer.php";
include_once "../../models/Partner.php";
include_once "../../models/Car.php";
include_once "../../models/Address.php";

$db = new Database();
$conn = $db->connect();
$booking = new Booking($conn);
$customer = new Customer($conn);
$partner = new Partner($conn);
$car = new Car($conn);
$address = new Address($conn);

if (isset($_GET['idBooking'])) {
    $booking->idBooking = $_GET['idBooking'];
    $thisBooking = $booking->searchBookingById();
    $customer->idCustomer = $thisBooking->idCustomer;
    $thisCustomer = $customer->searchCustomerById($customer);
    $partner->idPartner = $thisBooking->idPartner;
    $thisPartner = $partner->searchPartnerById($partner);
    $result = [
        $thisBooking,
        $thisCustomer,
        $thisPartner
    ];
} else {
    if (isset($_GET['idPartner'])) {
        $booking->idPartner = $_GET['idPartner'];
        $bookings = $booking->searchBookingsByPartner($booking);
    } elseif (isset($_GET['idCustomer'])) {
        $booking->idCustomer = $_GET['idCustomer'];
        $bookings = $booking->searchBookingsByCustomer($booking);
    } elseif (isset($_GET['idAgency'])) {
        $booking->idAgency = $_GET['idAgency'];
        $bookings = $booking->searchBookingsByAgency($booking);
    } elseif (isset($_GET['dateBooking'])) {
        $booking->dateBooking = $_GET['dateBooking'];
        $bookings = $booking->searchBookingsByDay($booking);
    } else {
        $bookings = $booking->listBookings();
    }
    $counter = $bookings->rowCount();
    if ($counter > 0) {
        $bookings_array = array();
        while ($row = $bookings->fetch()) {
            extract($row);
            $customer->idCustomer = $idCustomer;
            $thisCustomer = $customer->searchCustomerById($customer);
            $partner->idPartner = $idPartner;
            $thisPartner = $partner->searchPartnerById($partner);
            $car->idCar = $idCar;
            $thisCar = $car->searchCarById($car);
            if (!is_null($idForthAddress)) {
                $address->idAddress = $idForthAddress;
                $thisAddressForth = $address->searchAddress($address);
            }
            if (!is_null($idBackAddress)) {
                $address->idAddress = $idForthAddress;
                $thisAddressBack = $address->searchAddress($address);
            }
            $booking_item = [
                 "idBooking" => $idBooking,
                 // "idCustomer" => $idCustomer,
                 // "idPartner" => $idPartner,
                 "statusBooking" => $statusBooking,
                 "formulaBooking" => $formulaBooking,
                 // "idCar" => $idCar,
                 "idAgency" => $idAgency,
                 "dateForth" => $dateForth,
                 "hoursForth" => $hoursForth,
                 // "idForthAddress" => $idForthAddress,
                 "distanceForth" => $distanceForth,
                 "durationForth" => $durationForth,
                 // "idBackAddress" => $idBackAddress,
                 "dateBack" => $dateBack,
                 "hoursBack" => $hoursBack,
                 "distanceBack" => $distanceBack,
                 "durationBack" => $durationBack,
                 "originBooking" => $originBooking,
                 "customerDetails" => $thisCustomer,
                 "partnerDetails" => $thisPartner,
                 "addressForthDetails" => $thisAddressForth,
                 "addressBackDetails" => $thisAddressBack,
                 "carDetails" => $thisCar
            ];
            // Ajouter nom/prénom/téléphone client + nom/adresse partner + infos voiture + addresses completes
            array_push($bookings_array, $booking_item);
        }
        $result = $bookings_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}