<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Booking.php";

$db = new Database();
$conn = $db->connect();
$booking = new Booking($conn);

$bookings = $booking->prepareCalendar($booking);
$counter = $bookings->rowCount();
if ($counter > 0) {
    $bookings_array = array();
    while ($row = $bookings->fetch()) {
        extract($row);
        if (!empty($dateForth)) {
            $booking_item = [
                'date' => $dateForth,
                'hour' => $hoursForth,
                'idPartner' => $idPartner,
                'idAgency' => $idAgency
            ];
            array_push($bookings_array, $booking_item);
        }
        if (!empty($dateBack)) {
            $booking_item = [
                'date' => $dateBack,
                'hour' => $hoursBack,
                'idPartner' => $idPartner,
                'idAgency' => $idAgency
            ];
            array_push($bookings_array, $booking_item);
        }
    }
}
sort($bookings_array);

echo json_encode($bookings_array);

$calendar = array();
$shifts = ['7:30', 
   '8:00', '8:30', 
   '9:00', '9:30', 
   '10:00', '10:30', 
   '11:00', '11:30', 
   '12:00', '13:30', 
   '14:00', '14:30', 
   '15:00', '15:30', 
   '16:00', '16:30', 
   '17:00', '17:30', 
   '18:00', '18:30',
   '19:00', '19:30', 
   '20:00', '20:30'
];

for ($d = 0; $d <= 60; $d++) {
    $day = array();
    $dateCalendar = date('d/m/Y', strtotime('+'.$d.' days'));    
    for ($s = 0; $s < count($shifts); $s++) {
        if ((($bookings_array[0]['date']) == $dateCalendar) && ($bookings_array[0]['hours'] == $shifts[$s])) {
            array_push($day, [$shifts[$s] => 0, 'bookingData' => $bookings_array[0]]);
            array_splice($bookings_array, 0, 1);
        } else {
            array_push($day, [$shifts[$s] => 1]);
        }
    }
    array_push($week, $day);
    if (count($week) == 7) {
        $weekNumber = ($d+1)/7-1;
        array_push($calendar, [$weekNumber => $week]);
        unset($week);
    }
}

if (!empty($calendar)) {
    echo json_encode($calendar);
} else { 
    http_response_code(404); 
}



//Planning sur 10 semaines (numérotées de 0 à 9 dans le JSON)
//Créneau de 
//7h30 -> 21h
//Supprimer 12h30 > 13h30

//Entrer dans la BDD les durée/kms a la derniere étape 