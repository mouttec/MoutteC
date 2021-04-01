<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Video.php";

$db = new Database();
$conn = $db->connect();
$video = new Video($conn);

$decodedData = json_decode(file_get_contents("php://input"));
$video->idContract = $decodedData->idContract;
$videos = $video->searchContractVideos($video);

$nbVideos = $videos->rowCount();
switch ($nbVideos) {
    case 1:
        $video_type = "garageArrival";
        break;
    case 2:
        $video_type = "garageDeparture";
        break;
    case 3:
        $video_type = "customerReturn";
        break;        
    default:
        $video_type = "customerPickup";
        break;
}
$video->videoType = $video_type;

$filenameVideo = $decodedData->filenameVideo;
$video->urlVideo = $video->idContract ."/". $filenameVideo;

$result = $video->createVideo($video);

if ($result) {
    echo json_encode([ "message" => "La vidéo a été créée !" ]);
} else {     
    echo json_encode([ "message" => "La vidéo n'a pas pu être créée..." ]);
}