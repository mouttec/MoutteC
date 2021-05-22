<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Car.php";
$db = new Database();
$conn = $db->connect();
$car = new Car($conn);
$decodedData = json_decode(file_get_contents("php://input"));
$rawPlate = $decodedData->licensePlateCar;
//On retire les espaces et tiret éventuels
$carPlate = strtoupper(str_replace(["-", " "], "", $rawPlate));
//Si le premier caractère est un chiffre, c'est une plaque au format FNI, donc on la reformate
if (is_numeric(substr($carPlate, 0, 1))) {
    $numString = "0000";
    for ($i = 0; $i < 4; $i++) {
        if (is_numeric($carPlate[$i])) {
            $numString .= $carPlate[$i];
        }
    }
    //On retire les numéros de départ de la plaque
    $carPlate = substr($carPlate, strlen($numString)-4);
    //$numString correspond à la chaîne numérique au début de la plaque, ici avec 4 chiffres
    $numString = substr($numString, -4, 4);
    $alphaString = "";
    for ($i = 0; $i < 3; $i++) {
        if (!is_numeric($carPlate[$i])) {
            //$alphaString est la chaîne de lettres
            $alphaString .= $carPlate[$i];
        }
    }
    $departement = substr($carPlate, strlen($alphaString));
    $carPlate = $departement.$alphaString.$numString;
}
$car->licensePlateCar = $carPlate;
$carData = $car->searchCarByPlate($car);
if (empty($carData[0])) {
    try {
        $options = [
            'soap_version' => SOAP_1_2,
            'exceptions' => true,
            'trace' => 1,
            'cache_wsdl' => WSDL_CACHE_NONE
        ];
        $client = new SoapClient('https://ws.sivin.fr/sivin/services/WS_SiVin_Consulter?wsdl', $options);
        $headers = array();
        $headerbody = [
            "N_SIRET" => 89202838200018,
            "NOM_UTIL" => "sv5moutt",
            "MDP_UTIL" => "21rt85wq"
        ];
        foreach($headerbody as $name => $value) {
            $headers[] = new SoapHeader('http://web.service.aaa.asso.fr', $name, $value, false, "aaa");
        }
        $client->__setSoapHeaders($headers);
        $params = array('immat' => $carPlate);
        $response = $client->WS_SiVin_Consulter_VehiculeParImmat($params);
        foreach($response as $cle => $valeur1) {
            $carData = [
                "brandCar" => $valeur1->marque,
                "modelCar" => $valeur1->modeleEtude,
                "dateOfCirculationCar" => $valeur1->date1erCir,
                "colorCar" => $valeur1->couleurVehic,
                "versionCar" => $valeur1->version,
                "motorizationCar" => $valeur1->puisCh,
            ];
        }
        $car->idCustomer = $decodedData->idCustomer;
        $car->brandCar = $carData['brandCar'];
        $car->modelCar = $carData['modelCar'];
        $car->dateOfCirculationCar = str_replace('-', '',$carData['dateOfCirculationCar']->jour.'/'.$carData['dateOfCirculationCar']->mois.'/'.$carData['dateOfCirculationCar']->annee);
        $car->colorCar = $carData['colorCar'];
        $car->versionCar = $carData['versionCar'];
        $car->motorizationCar = $carData['motorizationCar'];
        $result = $car->createCar($car);
        if ($result) {
        	echo json_encode($carData);
        }
    }
    catch (Exception $e) {
        echo $e."\n";
        var_dump($client->__getLastRequest());
    }
} else {
	echo json_encode($carData);
}