<?php

namespace App\Date;

class Month {

    private $months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    private $month;
    private $year;

    /**
     * Month constructor
     * @param int $month le mois compris entre 1 et 12
     * @param int $year l'année
     * @throws \Exception
    */

    public function __construct(?int $month = null, ?int $year = null) {
        if ($month === null) {
            $month = intval(date('m'));
        }
        if ($year === null) {
            $year = intval(date('Y'));
        }
        if ($month < 1 || $month > 12) {
            throw new \Exception( "Le mois $month n'est pas valide" );
        if ($year < 1970 ) {
            throw new \Exception("L'année est inférieru à 1970");
        }
        $this->month = $month;
        $this->year = $year;
        }
    }

    /**
     * Retourne le mois en toute lettre (ex: MARS 2021)
     * @return string
     */

    public function toString(): string {
       return $this->months[$this->month - 1]. ' '. $this->year;
       echo 'year';
    }
}