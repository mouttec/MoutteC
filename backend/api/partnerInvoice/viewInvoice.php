<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/PartnerInvoice";
include_once "../../models/Partner.php";
include_once "../../models/Booking.php";
include_once "../../models/Customer.php";
include_once "../../models/Contract.php";
include_once "../../models/Price.php";
include_once "../../models/Car.php";

require('../../fpdf183/fpdf.php');

class PDF extends FPDF
{
	public function Header()
	{
	    // Logo
	    $this->Image('../assets/logo.png',10,6,30);
	    $this->SetFont('Arial','B',15);
	    $this->Cell(80);
	    $this->Cell(30,10,'Facture',1,0,'C');
	    $this->Ln(0);
	    $this->Cell(70);
	    $this->Cell(30,10,'N° : '. $thisPartnerInvoice['invoiceNumber'],1,0,'C');
	    $this->Ln(0);
	    $this->Cell(70);
	    $this->Cell(30,10,'Date : '. $thisPartnerInvoice['invoiceDate'],1,0,'C');
	    $this->Ln(20);
	}

	public function Footer()
	{
		//Marge en bas de 1cm de plus pour laisser de la place à l'impression
	    $this->SetY(-25);
	    $this->SetFont('Arial','I',8);
	    $this->Cell(0,5,'3 Avenue Sainte Euphémie – 13380 Plan de Cuques',0,1,'C');
		$this->Cell(0,5,'Tél : 06.09.31.44.22 – E-mail : contact@mouttec.com – www.mouttec.com',0,1,'C');
		$this->Cell(0,5,'S.A.S au capital de 1 000€ - RCS MARSEILLE 892 028 382 – APE 5221Z',0,0,'C');
		$this->Cell(0,5,'Page '.$this->PageNo().'/{nb}',0,0,'R');
	}

	function invoiceInfo() {
		$thisAddressStreet = $thisPartner['numberAddressBilling'].', '.$thisPartner['typeAddressBilling'].' '.$thisPartner['nameAddressBilling'];
		$thisAddressZipCity = $thisPartner['zipAddressBilling'].' '.$thisPartner['cityAddressBilling'];
		$this->SetFont('Arial','B',12);
		$this->Cell(20);
		$this->Cell(80,0,'MoutteC',0,0,'L');
		$this->SetFont('Arial','',12);
		$this->Cell(80,0,$thisPartner['namePartner'],0,1,'L');
		$this->Cell(20);
		$this->Cell(80,0,'3 avenue Sainte Euphémie',0,0,'L');
		$this->Cell(80,0,$thisAddressStreet,0,1,'L');
		$this->Cell(20);
		$this->Cell(80,0,'13380 Plan de Cuques',0,0,'L');
		if (!empty($thisPartner['addressStreetComplement'])) {
			$this->Cell(80,0,$thisPartner['addressStreetComplement'],0,1,'L');
			$this->Cell(20);
			$this->Cell(80,0,'contact@mouttec.com',0,0,'L');
			$this->Cell(80,0,$thisAddressZipCity,0,1,'L');
			$this->Cell(20);
			$this->Cell(80,0,'06.09.31.44.22',0,0,'L');
			$this->Cell(80,0, $thisPartner['phonePartner'],0,1,'L');
		} else {
			$this->Cell(80,0,$thisAddressZipCity,0,1,'L');
			$this->Cell(20);
			$this->Cell(80,0,'contact@mouttec.com',0,0,'L');
			$this->Cell(80,0, $thisPartner['phonePartner'],0,1,'L');
			$this->Cell(20);
			$this->Cell(80,0,'06.09.31.44.22',0,0,'L');
		}
		$this->Ln(20);
	}

	function carInfo()
	{
		$this->SetFont('Arial','',14);
		$this->SetFillColor(237,125,49);
		$this->SetDrawColor(237,125,49);
		$this->SetTextColor(0);
		$this->SetLineWidth(0.3);
		$this->Cell(20);
		$this->Cell(160,12,'Détails du véhicule' ,1,1,'C');
		// $this->SetFillColor(255);
		$this->SetFont('','',12);
		$this->Cell(20);
		$this->Cell(80,12,'Immatriculation : '. $thisCar['licencePlateCar'] ,'L',0,'C', false);
		$this->Cell(80,12,'Marque : '. $thisCar['brandCar'] ,'R',1,'C', false);
		$this->Cell(20);
		$this->Cell(60,12,'Modèle : '. $thisCar['modelCar'] ,'LB',0,'C', false);
		$this->Cell(100,12,'1ère mise en circulation : '. $thisCar['dateOfCirculationCar'] ,'RB',1,'C', false);
		$this->Ln(20);
	}

	function invoiceLinesArray() 
	{
		$this->SetFont('','','14');
		// $this->SetFillColor(237,125,49);
		// $this->SetDrawColor(237,125,49);
		// $this->SetTextColor(0);
		// $this->SetLineWidth(0.3);
		$this->Cell(20);
		$this->Cell(160,12,'Détails de la prestation',1,1,'C');
		$additionalFees = $thisContract->additionalFees;
		$charges = array($thisBooking->formulaBooking => '1' )+$additionnalFees;
		$prices = $price->listPrices();		
		$counter = $prices->rowCount();
		if ($counter > 0) {
			$prices_array = array();
			while ($row = $prices->fetch()) {
				extract($row);
				array_push($prices_array[$typePrice], array('description' => $priceDescription, 'montant' => $amount);
			}
		}

		$header = ["Intitulé de la prestation (formule choisie, frais supplémentaires...)", "Prix HT", "Qauntité", "TVA", "Prix TTC"];
		$this->SetFillColor(251, 228, 213);
	    // $this->SetDrawColor(237,125,49);
	    // $this->SetLineWidth(.3);
	    $this->SetFont('','', '11');
		$w = array(80, 20, 20, 20, 20);
	    for ($i = 0; $i < count($header); $i++) {
	        $this->Cell($w[$i],7,$header[$i],1,0,'C',true);
	    	$this->Ln();
    	}
	    $this->SetFont('');
	    $fill = false;
		for ($i = 0; $i < count($charges); $i++) {
			$tvaPercentage = 20;
			$ttc = $prices_array[key($charges)]['montant'];
			$tva = $ttc/(100+$tvaPercentage)*$tvaPercentage;
			$ht = $ttc-$tva;
			$totalTtcAmount += $ttc;
			//Description
	        $this->Cell($w[0],10,$prices_array[key($charges)]['description'],1,0,'L',$fill);
	        //Prix HT
	        $this->Cell($w[1],10,number_format($ht,0,',',' '),1,0,'L',$fill);
	        //Quantité
	        $this->Cell($w[2],10,current($charges),1,0,'C',$fill);
	        //TVA
	        $this->Cell($w[3],10,number_format($tvaAmount,0,',',' '),1,0,'C',$fill);
	        //Prix TTC
	        $this->Cell($w[4],10,number_format($ttc,0,',',' '),1,0,'R',$fill);
	        $this->Ln();
	        $fill = !$fill;
		}
	    // $this->Cell(array_sum($w),0,'','T');
	}

	function sums($invoiceAmount)
	{
	    $this->SetFont('','', '12');
		$totalTvaAmount = $totalTtcAmount/(100+$tvaPercentage)*$tvaPercentage;
		$totalHtAmount = $totalTtcAmount-$totalTvaAmount;
		$this->Cell(80);
		$this->Cell(40, 10,"Total hors taxe : ",1,0,'L', true);
		$this->Cell(0,0,$totalHtAmount,1,0,'R', true);
		$this->Cell(80);
		$this->Cell(40, 10,"TVA 20% : ",1,0,'L', true);
		$this->Cell(0,0,$totalTvaAmount,1,0,'R', true);
		$this->Cell(80);
		$this->Cell(40, 10,"Total TTC : ",1,0,'L');
		$this->Cell(0,0,$totalTtcAmount,1,0,'R');
		$this->SetFont('', 'B', 14);
		$this->Cell(40, 10,"Net à payer : ",1,0,'L', true);
		$this->Cell(0,0,$totalTtcAmount,1,0,'R', true);
	}
}

$db = new Database();
$conn = $db->connect();
$partnerInvoice = new PartnerInvoice($conn);
$partner = new Partner($conn);
$customer = new Customer($conn);
$booking = new Booking($conn);
$contract = new Contract($conn);
$price = new Price($conn);
$car = new Car($conn);

$decodedData = json_decode(file_get_contents("php://input"));
$partnerInvoice->idInvoice = $decodedData->idInvoice;

$thisPartnerInvoice = $partnerInvoice->searchInvoiceById($partnerInvoice);
$booking->idBooking = $thisPartnerInvoice['idBooking'];
$thisBooking = $booking->searchBookingById($booking);
$contract->idContract = $thisPartnerInvoice['idContract'];
$thisContract = $contract->searchContractByBooking($contract);
$partner->idCustomer = $thisPartnerInvoice['idCustomer'];
$thisPartner = $partner->searchCustomerById($partner);
$car->idCar = $thisBooking['idCar'];
$thisCar = $car->searchCarById($car);

//Couleur Mouttec : ed7d31 / rgb(237,125,49)
	$pdf = new FPDF();
	$pdf->addPage();
	$pdf->invoiceInfo();
	$pdf->carInfo();
	$pdf->invoiceLinesArray();
	$pdf->sums();
	$pdf->Output();
// } else {
// 	http_response_code(404); 
// }