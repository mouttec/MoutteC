<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/PartnerInvoices.php";
include_once "../../models/Contract.php";
include_once "../../model/Prices.php";
include_once "../../model/Booking.php";

$db = new Database();
$conn = $db->connect();
$partnerInvoice = new PartnerInvoices($conn);
$contract = new Contract($conn);
$price = new Price($conn);
$booking = new Booking($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$partnerInvoice->invoiceDate = date('Y-m');
$nInvoices = $partnerInvoice->listInvoices();
$n = $nInvoices->rowCount()+1;
$ncInvoices = $partnerInvoice->listInvoicesByMonth($partnerInvoice);
$nc = $ncInvoices->rowCount()+1;
$partnerInvoice->invoiceNumber = $date('Ymj')."P".$n.'-'.$nc;

$contract->idContract = $decodedData->idContract;
$thisContract = $contract->searchContract($contract);
$partnerInvoice->invoiceLines = $thisContract['additionnalFees'];
$booking->idBooking = $thisContract['idBooking'];
$thisBooking = searchBookingById($booking);

$prices = $price->listPrices();
$counter = $prices->rowCount();
if ($counter > 0) {
    $prices_array = array();
    while($row = $prices->fetch()) {
        extract($row);
        array_push($prices_array, $typePrice => $amount);
    }
}

// for ($i = 0; $i = count($thisContract['additionnalFees']); $i++) {
//     if ($i == 0) {
        $amount = $prices_array[$thisBooking['formulaBooking'];
//     } else {
//         $amount += $prices_array[current($thisContract['additionnalFees'])];
//         next($thisContract['additionnalFees']);
//     }
// }
$partnerInvoice->amountInvoice = $amount;

$partnerInvoice->idPartner = $thisContract->idPartner;
$partnerInvoice->idCustomer = $thisContract->idCustomer;
$partnerInvoice->idBooking = $thisContract->idBooking;
$partnerInvoice->idContract = $thisContract->idContract;
$partnerInvoice->idCar = $thisContract->idCar;

$result = $partnerInvoice->createInvoice($partnerInvoice);

if ($result) {
    echo json_encode([ "message" => "La facture a été éditée !" ]);
} else {
    echo json_encode([ "message" => "La facture n'a pas pu être éditée..." ]);
}