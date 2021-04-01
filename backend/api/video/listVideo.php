<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Video.php";

$db = new Database();
$conn = $db->connect();
$video = new Video($conn);

$decodedData = json_decode(file_get_contents("php://input"));

if (isset($_GET['idVideo'])) {
    $video->idVideo = $_GET['idVideo'];
    $result = $video->searchVideo($video);
} else {
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
            array_push($videos_array, $video_item);
        }
        $result = $videos_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}