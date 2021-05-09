<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Teammate.php";

$db = new Database();
$conn = $db->connect();
$teammate = new Teammate($conn);

if (isset($_GET['idTeammate'])) {
	$teammate->idTeammate = $_GET['idTeammate'];
	$result = $teammate->searchTeammateById($teammate);
} else {
	$teammates = $teammate->listTeammates();
	if (isset($_GET['idAgency'])) {
		$criteria = $_GET['idAgency'];
	}
	if (isset($_GET['jobTeammate'])) {
		$criteria = $_GET['jobTeammate'];
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
			if ((isset($_GET['idAgency'])) && ($_GET['idAgency'] == $idAgency)) {
				array_push($teammates_array, $teammate_item);				
			} else if ((isset($_GET['jobTeammate'])) && ($_GET['jobTeammate'] == $jobTeammate)) {
				array_push($teammates_array, $teammate_item);
			} else if ((!isset($_GET['idAgency'])) && (!isset($_GET['jobTeammate']))) {
				array_push($teammates_array, $teammate_item);
			}
		}
		$result = $teammates_array;
	}
}

if (isset($result) && !empty($result)) {
 	echo json_encode($result);
} else { 
	http_response_code(404); 
}
