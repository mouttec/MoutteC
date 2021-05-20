<?php
class Customer {
    private $conn;
    private $table = "customers";

    public $idCustomer;
    public $firstNameCustomer;
    public $lastNameCustomer;
    public $dateOfBirthdayCustomer;
    public $phoneCustomer;
    public $mailCustomer;
    public $statusCustomer;
    public $mixedPassword;
    public $idPartner;
    public $dateCustomer;
    public $idBillingAddress;

    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createCustomer() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            firstNameCustomer = :firstNameCustomer,
            lastNameCustomer = :lastNameCustomer,
            dateOfBirthdayCustomer = :dateOfBirthdayCustomer,
            phoneCustomer = :phoneCustomer, 
            mailCustomer = :mailCustomer,
            statusCustomer = :statusCustomer,
            mixedPassword = :mixedPassword
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "firstNameCustomer" => htmlspecialchars(strip_tags($this->firstNameCustomer)),
            "lastNameCustomer" => htmlspecialchars(strip_tags($this->lastNameCustomer)),
            "dateOfBirthdayCustomer" => htmlspecialchars(strip_tags($this->dateOfBirthdayCustomer)),
            "phoneCustomer" => htmlspecialchars(strip_tags($this->phoneCustomer)),
            "mailCustomer" => htmlspecialchars(strip_tags($this->mailCustomer)),
            "statusCustomer" => htmlspecialchars(strip_tags($this->statusCustomer)),
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT)
        ];

        if ($stmt->execute($params)) {
            $query = "SELECT max(idCustomer) FROM ". $this->table;
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function listCustomers() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idCustomer ASC";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function searchCustomersByPartner() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE idPartner = :idPartner";
        $stmt = $this->conn->prepare($query);

        $params = ["idPartner" => $this->idPartner];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchCustomerByEmail() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE mailCustomer = :mailCustomer
        LIMIT 0,1";
        $stmt = $this->conn->prepare($query);

        $params = ["mailCustomer" => htmlspecialchars(strip_tags($this->mailCustomer))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function searchCustomerById() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE idCustomer = :idCustomer";
        $stmt = $this->conn->prepare($query);

        $params = ["idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function searchCustomerByNames() 
    {
        $query = "
            SELECT *
            FROM "
            .   $this->table . 
            " WHERE (lastNameCustomer = :lastNameCustomer AND firstNameCustomer = :firstNameCustomer)";
        $stmt = $this->conn->prepare($query);

        $params = [
            "lastNameCustomer" => htmlspecialchars(strip_tags($this->lastNameCustomer)),
            "firstNameCustomer" => htmlspecialchars(strip_tags($this->firstNameCustomer))
        ];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function searchCustomersByLastname() 
    {
        $query = "
            SELECT *
            FROM "
            .   $this->table . 
            " WHERE lastNameCustomer = :lastNameCustomer
            ORDER BY idCustomer";
        $stmt = $this->conn->prepare($query);

        $params = ["lastNameCustomer" => htmlspecialchars(strip_tags($this->lastNameCustomer))];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function updateCustomer() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            firstNameCustomer = :firstNameCustomer,
            lastNameCustomer = :lastNameCustomer,
            dateOfBirthdayCustomer = :dateOfBirthdayCustomer,
            phoneCustomer = :phoneCustomer,
            mailCustomer = :mailCustomer
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "firstNameCustomer" => htmlspecialchars(strip_tags($this->firstNameCustomer)),
            "lastNameCustomer" => htmlspecialchars(strip_tags($this->lastNameCustomer)),
            "dateOfBirthdayCustomer" => htmlspecialchars(strip_tags($this->dateOfBirthdayCustomer)),
            "phoneCustomer" => htmlspecialchars(strip_tags($this->phoneCustomer)),
            "mailCustomer" => htmlspecialchars(strip_tags($this->mailCustomer)),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function updateStatusCustomer() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusCustomer = :statusCustomer
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "statusCustomer" => htmlspecialchars(strip_tags($this->statusCustomer)),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function bindPartnerToCustomer() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idPartner = :idPartner
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function bindBillingAddress() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idBillingAddress = :idBillingAddress
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idBillingAddress" => htmlspecialchars(strip_tags($this->idBillingAddress)),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function updatePasswordCustomer() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            mixedPassword = :mixedPassword
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function deactivateCustomer() 
    {
       $query = "
            UPDATE "
            . $this->table .
            " SET
            statusCustomer = :statusCustomer
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "statusCustomer" => "Inactif",
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function sendNewPasswordEmail() 
    {
        $messageContent = [
                'name'              => htmlspecialchars(strip_tags($this->lastNameCustomer)).' '.htmlspecialchars(strip_tags($this->firstNameCustomer)),
                'mailCustomer'      => htmlspecialchars(strip_tags($this->mailCustomer)),
                'confirmationCode'  => $this->mixedPassword,
                'id'                => $this->idCustomer
                    ];
        $mailContent = '<p>Bonjour '. $messageContent['name'] .' !<br />Nous vous invitons à confirmer votre compte client chez MoutteC en créant votre mot de passe en cliquant sur 
                        <a href="https://mouttec.com/confirmAccount?key='.$messageContent['confirmationCode'].'">ce lien</a>"<br /><br />
                        En cas de problème, copiez et collez ce lien dans votre navigateur préféré : <br />
                        https://mouttec.com/confirmAccount?id='.$messageContent['id'].'&key='.$messageContent['confirmationCode'].'<br /><br />
                        Toute l\'équipe de <a href="https://mouttec.com">MoutteC</a> vous remercie de votre confiance !<br />';
        $customerHeaders =  'Reply-To: contact@mouttec.com' . "\r\n" .
                            'X-Mailer: PHP/' . phpversion() . "\r\n" .
                            'MIME-Version: 1.0' . "\r\n" . 
                            'Content-Type: text/html; charset=UTF-8' . "\r\n";
        mail($messageContent['mailCustomer'], 'Création d\'un nouveau mot de passe sur MoutteC', $mailContent, $customerHeaders);
    }
}