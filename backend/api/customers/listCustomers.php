<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Customer.php";

$db = new Database();
$conn = $db->connect();
$customer = new Customer($conn);

if (isset($_GET['idCustomer'])) {
    $customer->idCustomer = $_GET['idCustomer'];
    $result = $customer->searchCustomerById($customer);
} else {
    if (isset($_GET['idPartner'])) {
        $customer->idPartner = $_GET['idPartner'];
        $customers = $customer->searchCustomersByPartner($customer);
    } else {
        $customers = $customer->listCustomers();
    }
    $counter = $customers->rowCount();
    if ($counter > 0) {
        $customers_array = array();
        while ($row = $customers->fetch()) {
            extract($row);
            $customer_item = [
                 "idCustomer" => $idCustomer,
                 "idBillingAddress" => $idBillingAddress,
                 "firstNameCustomer" => $firstNameCustomer,
                 "lastNameCustomer" => $lastNameCustomer,
                 "dateOfBirthdayCustomer" => $dateOfBirthdayCustomer,
                 "phoneCustomer" => $phoneCustomer,
                 "mailCustomer" => $mailCustomer
            ];
            array_push($customers_array, $customer_item);
        }
        $result = $customers_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}