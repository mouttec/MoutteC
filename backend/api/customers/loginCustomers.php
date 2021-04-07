<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once("database.php");
include_once "../../models/Customer.php";

$db = new Database();
$conn = $db->connect();
$customer = new Customer($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$customer->mailCustomer = $decodedData->mailCustomer;
$proposedPassword = $decodedData->mixedPassword;

$customerExists = $customer->searchCustomerByEmail($customer)
if (password_verify($proposedPassword, $customerExists->mixedPassword)) {
	echo json_encode($customerExists);
} else {
	http_response_code(404);
}