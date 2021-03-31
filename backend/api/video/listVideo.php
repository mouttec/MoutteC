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
    $result = $video->listVideos();
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}