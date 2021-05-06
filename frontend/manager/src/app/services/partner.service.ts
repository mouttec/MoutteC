import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  partners = [
    {
      usernamePartner: 'Midas',
      namePartner: 'Dylan AUto'

    },
    {
      usernamePartner: 'Carrosserie',
      namePartner: 'Carrosseie La valentine'

    },
    {
      usernamePartner: 'Mercedez',
      namePartner: 'Concessionnaire Mercedez'

    }
  ]

  constructor() { }
}
