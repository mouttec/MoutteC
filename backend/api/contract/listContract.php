<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Contract.php";
include_once"../../models/Video.php";

$db = new Database();
$conn = $db->connect();
$contract = new Contract($conn);
$booking = new Booking($conn);
$customer = new Customer($conn);
$partner = new Partner($conn);
$car = new Car($conn);
$address = new Address($conn);

if ((isset($_GET['idContract'])) || (isset($_GET['idBooking']))) {
    if(isset($_GET['idContract'])) { 
        $contract->idContract = $_GET['idContract'];
        $resultContract = $contract->searchContract($contract);
    } elseif (isset($_GET['idBooking'])) {
        $contract->idBooking = $_GET['idBooking'];
        $resultContract = $contract->searchContractByBooking($contract);
    }
    $booking->idBooking = $resultContract->idBooking;
    $thisBooking = $booking->searchBookingById($booking);
    $customer->idCustomer = $resultContract->idCustomer;
    $thisCustomer = $customer->searchCustomerById($customer);
    $partner->idPartner = $resultContract->idPartner;
    $thisPartner = $partner->searchPartnerById($partner);
    $car->idCar = $resultContract->idCar;
    $thisCar = $car->searchCarById($car);
    if (!is_null($idForthAddress)) {
        $address->idAddress = $resultContract->idForthAddress;
        $thisAddressForth = $address->searchAddress($address);
    }
    if (!is_null($idBackAddress)) {
        $address->idAddress = $resultContract->idForthAddress;
        $thisAddressBack = $address->searchAddress($address);
    }
    //Récupération des vidéos liées au contrat
    $video = new Video($conn);
    $video->idContract = $_GET['idContract'];
    $videos = $video->searchContractVideos($video);
    $counter = $videos->rowCount();
    if ($counter > 0) {
        $videos_array = array();
        while ($row = $videos->fetch()) {
            $video_item = [
                "idVideo" => $idVideo,
                "urlVideo" => $urlVideo,
                "idContract" => $idContract,
                "dateVideo" => $dateVideo,
                "videoType" => $videoType
            ];
            array_push($videos_array, $video_item);
        }
        $resultVideos = $video_array;
    }
    $result = [
        "contractDetails" => $resultContract, 
        "bookingDetails" => $thisBooking, 
        "customerDetails" => $thisCustomer, 
        "partnerDetails" => $thisPartner, 
        "carDetails" => $thisCar, 
        "addressForthDetails" => $thisAddressForth, 
        "addressBackDetails" => $thisAddressBack, 
        "videoList" => $resultVideos
    ];
} else {
    if (isset($_GET['idPartner'])) {
        $contract->idPartner = $_GET['idPartner'];
        $contracts = $contract->searchContractsByPartner($contract);
    }
    elseif (isset($_GET['idCustomer'])) {
        $contract->idCustomer = $_GET['idCustomer'];
        $contracts = $contract->searchContractsByCustomer($contract);
    }
    elseif (isset($_GET['idAgency'])) {
        $contract->idAgency = $_GET['idAgency'];
        $contracts = $contract->searchContractsByAgency($contract);
    }
    elseif (isset($_GET['idCar'])) {
        $contract->idCar = $_GET['idCar'];
        $contracts = $contract->searchContractsByCar($contract);
    } else {
        $contracts = $contract->listContracts();
    }
    $counter = $contracts->rowCount();
    if ($counter > 0) {
        $contracts_array = array();
        while ($row = $contracts->fetch()) {
            extract($row);
            $booking->idBooking = $idBooking;
            $thisBooking = $booking->searchBookingById($booking);
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
            $contract_item = [
                "idContract" => $idContract,
                "idBooking" => $idBooking,
                "urlContract" => $urlContract,
                "idTeammateForth" => $idTeammateForth,
                "$idTeammateBack" => $idTeammateBack,
                "bookingDetails" => $thisBooking,
                "customerDetails" => $thisCustomer,
                "partnerDetails" => $thisPartner,
                "addressForthDetails" => $thisAddressForth,
                "addressBackDetails" => $thisAddressBack,
                "carDetails" => $thisCar
            ];
            array_push($contracts_array, $contract_item);
        }
        $result = $contracts_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}