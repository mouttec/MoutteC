<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Teammate.php";
include_once "../../models/Agency.php";

$db = new Database();
$conn = $db->connect();
$teammate = new Teammate($conn);
$agency = new Agency($conn);

if (isset($_GET['idTeammate'])) {
	$teammate->idTeammate = $_GET['idTeammate'];
	$thisTeammate = $teammate->searchTeammateById($teammate);
	$agency->idAgency = $thisTeammate['idAgency'];
	$thisAgency = $agency->searchAgency($agency);
	$result = array();
	array_push($result, $thisTeammate, $thisAgency);
} else {
	if (isset($_GET['idAgency'])) {
		$teammate->idAgency = $_GET['idAgency'];
		$teammates = $teamate->searchTeammatesByAgency($teammate);
	} else if (isset($_GET['jobTeammate'])) {
		$teammate->jobTeammate = $_GET['jobTeammate'];
		$teammates = $teammate->searchTeammatesByJob($teammate);
	} else {
		$teammates = $teammate->listTeammates();		
	}
	$counter = $teammates->rowCount();
	if ($counter > 0) {
		$teammates_array = array();
		while($row = $teammates->fetch()) {
			extract($row);
			$teammate_item = [
				"idTeammate" => $idTeammate,
				"firstNameTeammate" => $firstNameTeammate,
				"lastNameTeammate" => $lastNameTeammate,
				"usernameTeammate" => $usernameTeammate,
				"mailTeammate" => $mailTeammate,
				"phoneTeammate" => $phoneTeammate,
				"statusTeammate" => $statusTeammate,
				"jobTeammate" => $jobTeammate,
				"idAgency" => $idAgency,
				"superAdmin" => $superAdmin
			];
			$agency->idAgency = $idAgency;
			$thisAgency = $agency->searchAgency($agency);
			array_push($teammate_item, $thisAgency);
			array_push($teammates_array, $teammate_item);
		}
		$result = $teammates_array;
	}
}

if (isset($result) && !empty($result)) {
 	echo json_encode($result);
} else { 
	http_response_code(404); 
}
