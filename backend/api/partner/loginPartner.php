<?php
include_once("database.php");
include_once "../../models/Partner.php";

$decodedData = json_decode(file_get_contents("php://input"));
$partner = array();
foreach ($decodedData as $key => $value) {
    array_push($partner[$key] = htmlspecialchars(strip_tags($value)));
}

//On créé un objet Partner pour chercher celui qui correspond à l'email donné
$partnerRequest = new Partner;
$partnerExists = $partnerRequest->searchPartner($usernamePartner);
//Vérification du mot de passe
(!empty($partnerExists) && password_verify($partner['password'], $partnerExists['mixedPassword']) : echo json_encode($partnerExists) ? http_response_code(404);


// $password = mysqli_real_escape_string($mysqli, trim($decodedData['passwordPartner']));
// $usernamePartner = mysqli_real_escape_string($mysqli, trim($decodedData['usernamePartner']));


//$sql = "SELECT * FROM teammates where email='$email'";
// $result = mysqli_query($mysqli,$sql);
// $rows = array();
// while($row = mysqli_fetch_assoc($result))
// {
//     $rows[] = $row;
// }