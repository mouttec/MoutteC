<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Customer.php";

$db = new Database();
$conn = $db->connect();
$customer = new Customer($conn);

$customer->idCustomer = $_GET['id'];
$customer->mixedPassword = $_GET['key'];

$customerToTest = $customer->searchCustomerById($customer);

if (!empty($customerToTest)) {
    if (password_verify($customer->mixedPassword, $customerToTest->mixedPassword)) {
        $result = $customer->updatePasswordCustomer($customer);
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode([ "message" => "Mot de passe modifié avec succès" ]);
} else { 
    http_response_code(404); 
}