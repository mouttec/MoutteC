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

if (isset($_GET['idContract'])) {
    $contract->idContract = $_GET['idContract'];
    $resultContract = $contract->searchContract();
    //Récupération des vidéos liées au contrat
    $videos = new Video($conn);
    $videos = $videos->searchContractVideos();
    $counter = rowCount($videos);
    if ($counter > 0) {
        $videos_array = array();
        while($row = $videos->fetch()) {
            $video_item = [
                "idVideo" => $idVideo,
                "urlVideo" => $urlVideo,
                "idContract" => $idContract,
                "videoType" => $videoType
            ];
            array_push($videos_array, $video_item);
        }
        $resultVideos = $video_array;
    }
    $result = [$resultContract, $resultVideos];
} else {
    if (isset($_GET['idPartner'])) {
        $contract->idPartner = $_GET['idPartner'];
        $contracts = $contract->searchContractsByPartner();
    }
    else if (isset($_GET['idCustomer'])) {
        $contract->idCustomer = $_GET['idCustomer'];
        $contracts = $contract->searchContractsByCustomer();
    }
    else if (isset($_GET['idCar'])) {
        $contract->idCar = $_GET['idContract'];
        $contracts = $contract->searchContractsByCar();
    } else {
        $contracts = $contract->listContracts();
    }
    $counter = $contract->rowCount();
    if ($counter > 0) {
        $contracts_array = array();
        while ($row = $contracts->fetch()) {
            extract($row);
            $contract_item = [
                "idContract" => $idContract,
                "idCustomer" => $idCustomer,
                "idPartner" => $idPartner,
                "idBooking" => $idBooking,
                "urlContract" => $urlContract,
                "idCar" => $idCar,
                "idPickupAddress" => $idPickupAddress,
                "idReturnAddress" => $idReturnAddress,
                "idTeammatePickup" => $idTeammatePickup,
                "$idTeammateReturn" => $idTeammateReturn
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