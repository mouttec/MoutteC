<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/MonthlyPayment.php";
include_once "../../models/Partner.php";
require('../../fpdf183/fpdf.php');

class PDF extends FPDF
{
	public function Header()
	{
	    // Logo
	    // $this->Image('logo.png',10,6,30);
	    $this->SetFont('Arial','B',15);
	    $this->Cell(80);
	    $this->Cell(30,10,'Facture',1,0,'C');
	    $this->Ln(20);
	}

	public function Footer()
	{
		//Marge en bas de 1cm de plus pour laisser de la place à l'impression
	    $this->SetY(-25);
	    $this->SetFont('Arial','I',8);
	    $this->Cell(0,5,'3 Avenue Sainte Euphémie – 13380 Plan de cuques',0,1,'C');
		$this->Cell(0,5,'Tél : 06.09.31.44.22 – E-mail : contact@mouttec.com – www.mouttec.com',0,1,'C');
		$this->Cell(0,5,'S.A.S au capital de 1 000€ - RCS MARSEILLE 892 028 382 – APE 5221Z',0,0,'C');
		$this->Cell(0,5,'Page '.$this->PageNo().'/{nb}',0,0,'R');
	}

	function infosPartner($partnerKey) {
		$partner = new Partner($conn);
		$thisPartner = $partner->searchPartnerByKey($partner);
		$thisPartnerAddress = $thisPartner->numberAddressBilling.', '.$thisPartner->typeAddressBilling.' '.$thisPartner->nameAddressBilling;
		$thisPartnerZipCity = $thisPartner->zipAddressBilling.' '.$thisPartner->cityAddressBilling;
		$this->SetFont('Arial','B',12);
		$this->Cell(120);
		$this->Cell(0,0,$thisPartner->partnerName,0,0,'L');
		$this->Cell(120);
		$this->SetFont('','');
		$this->Cell(0,0,$thisPartner->$thisPartnerAddress,0,0,'L');
		if (!empty($thisPartner->$thisPartner->complementAddressBilling)) {
			$this->Cell(120);
			$this->Cell(0,0,$thisPartner->$thisPartner->complementAddressBilling,0,0,'L');
		}
		$this->Cell(120);
		$this->Cell(0,0,$thisPartner->$thisPartnerZipCity,0,0,'L');
		$this->Ln(20);
	}

	function infosInvoice($invoiceNumber, $dateMonthlyPayment) 
	{
		$pdf->SetFont('Arial','',12);
		$pdf->Cell(0,12,'Facture n°'.$invoiceNumber ,0,1,'L');
		$pdf->Cell(0,12,'Le '.$dateMonthlyPayment ,0,1,'L');
	}

	function invoiceLines($invoiceLinesArray) 
	{
		$header = ["Réf.", "Nom du client", "Date prestation", "Formule", "Prix prestation"];
		$this->SetFillColor(255,0,0);
	    $this->SetTextColor(255);
	    $this->SetDrawColor(237,125,49);
	    $this->SetLineWidth(.3);
	    $this->SetFont('','B');
		$w = array(20, 50, 40, 40, 40);
	    for ($i = 0; $i < count($header); $i++) {
	        $this->Cell($w[$i],7,$header[$i],1,0,'C',true);
	    	$this->Ln();
    	}
    	$this->SetFillColor(224,235,255);
	    $this->SetTextColor(0);
	    $this->SetFont('');
	    $fill = false;
		foreach ($invoiceLinesArray as $row) {
	        $this->Cell($w[0],10,$row[0],'LR',0,'L',$fill);
	        $this->Cell($w[1],10,$row[1],'LR',0,'L',$fill);
	        $this->Cell($w[2],10,$row[2],'LR',0,'C',$fill);
	        $this->Cell($w[3],10,$row[3],'LR',0,'L',$fill);
	        $this->Cell($w[3],10,number_format($row[4],0,',',' '),'LR',0,'R',$fill);
	        $this->Ln();
	        $fill = !$fill;
		}
	    $this->Cell(array_sum($w),0,'','T');
	}

	function sums($invoiceAmount)
	{
		$percentageVAT = 20;
		$totalVAT = $invoiceAmount / 100 * $percentageVAT;
		$ht = $invoiceAmount - $totalVAT;
		$this->Cell(80);
		$this->Cell(40, 10,"Total hors taxe : ",0,0,'R');
		$this->Cell(0,0,$ht,0,0,'L');
		$this->Cell(80);
		$this->Cell(40, 10,"TVA (20%) : ",0,0,'R');
		$this->Cell(0,0,$totalVAT,0,0,'L');
		$this->Cell(80);
		$this->SetFont('', 'B', 14);
		$this->Cell(40, 10,"Total TTC : ",0,0,'R');
		$this->Cell(0,0,$invoiceAmount,0,0,'L');
	}
}

$db = new Database();
$conn = $db->connect();
$monthlyPayment = new MonthlyPayment($conn);
$decodedData = json_decode(file_get_contents("php://input"));

$monthlyPayment->invoiceNumber = $decodedData->invoiceNumber;
$thisMonthlyPayment = $monthlyPayment->searchMonthlyPaymentByInvoiceNumber($monthlyPayment);

// public $idMonthlyPayment;
// public $idPartner;
// public $statusMonthlyPayment;
// public $invoiceNumber;
// public $invoiceAmount;
// public $invoiceLines;
// public $dateMonthlyPayment;
// public $partnerKey;

//Couleur Mouttec : ed7d31 / rgb(237,125,49)
if ($thisMonthlyPayment->partnerKey == $decodedData->partnerKey) {
	$pdf = new FPDF();
	$pdf->addPage();
	$pdf->infosPartner($thisMonthlyPayment->partnerKey);
	$pdf->infosInvoice($thisMonthlyPayment->invoiceNumber, $thisMonthlyPayment->dateMonthlyPayment);
	$pdf->invoiceLinesArray($thisMonthlyPayment->invoiceLines);
	$pdf->sums($thisMonthlyPayment->invoiceAmount);
	$pdf->Output();
} else {
	http_response_code(404); 
}