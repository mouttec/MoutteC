<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Calendar.php";

$db = new Database();
$conn = $db->connect();
$calendar = new Calendar($conn);

if (isset($_GET['idCalendar'])) {
	$calendar->idPartner = $_GET['idCalendar'];
    $result = $calendar->searchCalendarById($calendar);
} else {
    if (isset($_GET['idPartner'])) {
        $calendar->idPartner = $_GET['idPartner'];
        $calendars = $calendar->searchCustomersByPartner($calendar);
    } else {
        $calendars = $calendar->listCalendar();
    }
    $counter = $calendars->rowCount();
    if ($counter > 0) {
    	$calendars_array = array();
    	while ($row = $calendars->fetch()) {
    		extract($row);
    		$calendar_item = [
    			"idCalendar" => $idCalendar,
	            "title" => $title,
	            "start" => $start,
	            "end" => $end,
	            "idBooking" => $idBooking,
	            "idPartner" => $idPartner,
				"formulaBooking" => $formulaBooking
    		];
            array_push($calendars_array, $calendar_item);
    	}
    	$result = $calendars_array;
    }
}

if (isset($result) && !empty($result)) {
 	echo json_encode($result);
} else { 
    echo json_encode($idPartner);
	http_response_code(404); 
}