<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Booking.php";

$db = new Database();
$conn = $db->connect();
$booking = new Booking($conn);

$bookings = $booking->listBookings();

$counter = $bookings->rowCount();
if ($counter > 0) {
    $bookings_array = array();
    while ($row = $bookings->fetch()) {
        extract($row);
        if (($dateForth >= date('d/m/Y')) && ($dateForth <= date('d/m/Y', strtotime('+60 days')))) {
            $thisHour = substr($hoursForth, 0, 2);
            $thisQuarter = substr($hoursForth, 3, 2)/15;
            if (strlen($thisHour) == 1) {
                $thisHour = '0'.$thisHour;
            }
            $bookingTimecode = 'h'.$thisHour.'q'.$thisQuarter;
            $booking_item = [
                 "idBooking" => $idBooking,
                 "idCustomer" => $idCustomer,
                 "idPartner" => $idPartner,
                 "idAgency" => $idAgency,
                 "statusBooking" => $statusBooking,
                 "formulaBooking" => $formulaBooking,
                 "idCar" => $idCar,
                 "date" => $dateForth,
                 "hours" => $hoursForth,
                 "idForthAddress" => $idForthAddress,
                 "distance" => $distanceForth,
                 "duration" => $durationForth,
                 'bookingTimecode' => $bookingTimecode
            ];
            array_push($bookings_array, $booking_item);
        }
        if (($dateBack >= date('d/m/Y')) && ($dateBack <= date('d/m/Y', strtotime('+60 days')))) {
            $thisHour = substr($hoursBack, 0, 2);
            $thisQuarter = substr($hoursBack, 3, 2)/15;
            if (strlen($thisHour) == 1) {
                $thisHour = '0'.$thisHour;
            }
            $bookingTimecode = 'h'.$thisHour.'q'.$thisQuarter;
            $booking_item = [
                 "idBooking" => $idBooking,
                 "idCustomer" => $idCustomer,
                 "idPartner" => $idPartner,
                 "idAgency" => $idAgency,
                 "statusBooking" => $statusBooking,
                 "formulaBooking" => $formulaBooking,
                 "idCar" => $idCar,
                 "date" => $dateBack,
                 "hours" => $hoursBack,
                 "idBackAddress" => $idBackAddress,
                 "distance" => $distanceBack,
                 "duration" => $durationBack,
                 'bookingTimecode' => $bookingTimecode
            ];
            array_push($bookings_array, $booking_item);
        }
    }
    echo json_encode($bookings_array);
    sort($bookings_array);
}
// echo json_encode($bookings_array);

$quarters = [0, 1, 2, 3];
$shifts = array(); 
for ($h = 7; $h <= 20; $h++) {
    foreach ($quarters as $quarter) {
        if (strlen($h) == 1) {
            $timecode = 'h0'.$h.'q'.$quarter;
        } else {
            $timecode = 'h'.$h.'q'.$quarter;
        }
        //On retire les créaneaux non disponibles dans le calendrier
        if (($timecode != 'h07q0') && ($timecode != 'h07q1') && ($timecode != 'h20q3')) {
            array_push($shifts, $timecode);
        }
    }
}
$teammateShiftsOnly = ['12:30', '12:45', '13:00', '13:15', '13:30', '18h30', '18:45', '19:00', '19:15', '19h30', '19:45', '20:00', '20:15', '20:30'];

/*
Formatage de du jour dans le calendrier
setlocale(LC_ALL, 'fr_FR.UTF8', 'fr_FR','fr','fr','fra','fr_FR@euro');
echo strftime("%a %d %B");
echo strftime("%a %d %B", strtotime('+2 days')); (date + 2 jours)
Calendar[m4d14h07q2] pour le 14 avril à 7h30
*/

$calendar = array();
for ($d = 0; $d <= 70; $d++) {
    $lockingShiftCounter = 0;
    $newDay = date('d/m/Y', strtotime('+'.$d.' days'));
    $weekRank = substr(($d+7)/7-1, 0, 1);
    //strftime('%u'); Retourne le numéro du jour de la semaine, à vois pour le calcul de la semaine partielle

    //début du formatage du datecode
    $datecode = 'w'.$weekRank.'m'.date('m', strtotime('+'.$d.' days')).'d'.date('d', strtotime('+'.$d.' days'));
    for ($s = 0; $s < count($shifts); $s++) {
        $datetimeCode = $datecode.$shifts[$s];
        // echo json_encode(current($bookings_array));
        // echo json_encode(current($bookings_array)['bookingTimecode']);
        // if (((current($bookings_array)['date'] == $newDay) && (current($bookings_array)['bookingTimecode'] == $shifts[$s])) || ($lockingShiftCounter != 0)) {
        //     if ($lockingShiftCounter != 0) {
        //         //Si $lockingShiftCounter != 0 c'est qu'on est dans encore dans la résa précédente
        //         $lockingShiftCounter -= 1;
        //         $datetimeData = ['statusCalendar' => 'booked'];
        //     } else {
        //         $lockingShiftCounter = substr(((current($bookings_array)['duration']+20)/15)+0.99, 0, 1);
        //         $datetimeData = [
        //             'statusCalendar' => 'booked',
        //             'bookingData' => current($bookings_array),
        //         ];
        //     }
        //     next($bookings_array);
        //     //array_splice($bookings_array, 0, 1);
        // } elseif (in_array($shifts[$s], $teammateShiftsOnly)) {
        //     $datetimeData = [
        //         'statusCalendar' => 'locked',
        //     ];
        // }  else {
        //     $datetimeData = [
        //         'statusCalendar' => 'available',
        //     ];
        // }
        // array_push($calendar, ['datetimeCode' => $datetimeCode, 'datetimeData' => $datetimeData]);
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