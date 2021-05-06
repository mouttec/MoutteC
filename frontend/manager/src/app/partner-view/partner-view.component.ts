import { PartnerService } from '../services/partner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-view',
  templateUrl: './partner-view.component.html',
  styleUrls: ['./partner-view.component.css']
})
export class PartnerViewComponent implements OnInit {

  partners: any[];

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partners = this.partnerService.partners;
    console.log('test vue', this.partners);
    console.log('test service', this.partnerService.partners);
  }

}
