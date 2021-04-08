<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Video.php";
include_once "../../models/Partner.php";
include_once "../../models/Customer.php";
include_once "../../models/Contract.php";

$db = new Database();
$conn = $db->connect();
$video = new Video($conn);

if (isset($_GET['idVideo'])) {
    $video->idVideo = $_GET['idVideo'];
    $result = $video->searchVideo($video);
} else {
    if ((isset($_GET['idCustomer'])) || (isset($_GET['idPartner']))) {
        if (isset($_GET['idCustomer'])) {
            $contract = new Contract($conn);
            $contract->idCustomer = $_GET['idCustomer'];
            $contracts = $contract->searchContractsByCustomer($contract);
        }
        if (isset($_GET['idPartner'])) {
            $contract = new Contract($conn);
            $contract->idPartner = $_GET['idPartner'];
            $contracts = $contract->searchContractsByPartner($contract);
        }
        $counter = $contracts->rowCount()
        if ($counter > 0) {
            $contractsId = array();
            while ($row = $contracts->fetch()) {
                extract($row);
                array_push($contractsId, $idContract);
            }
        }
    }
    $videos = $video->listVideos();
    $counter = $videos->rowCount();
    if ($counter > 0) {
        $videos_array = array();
        while ($row = $videos->fetch()) {
            extract($row);
            $video_item = [
                 "idVideo" => $idVideo,
                 "urlVideo" => $urlVideo,
                 "idContract" => $idContract,
                 "dateVideo" => $dateVideo,
                 "videoType" => $videoType
            ];
            if ((isset($contractsId)) && (in_array($idContract, $contractsId))) {
                    array_push($videos_array, $video_item);
                }
            } else if ((!isset($_GET['idCustomer'])) && (!isset($_GET['idPartner']))) {
                array_push($videos_array, $video_item);
            }
        }
        $result = $videos_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}