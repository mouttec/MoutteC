<?php
include_once("database.php");
include_once "../../models/Customer.php";

$decodedData = json_decode(file_get_contents("php://input"));
$customer = array();
foreach ($decodedData as $key => $value) {
    array_push($customer[$key] = htmlspecialchars(strip_tags($value)));
}

//On créé un objet Partner pour chercher celui qui correspond à l'email donné
$customerRequest = new Customer;
$customerExists = $customerRequest->searchCustomer($mailCustomer);
//Vérification du mot de passe
(!empty($customerExists) && password_verify($customer['password'], $customerExists['mixedPassword']) : echo json_encode($customerExists) ? http_response_code(404);