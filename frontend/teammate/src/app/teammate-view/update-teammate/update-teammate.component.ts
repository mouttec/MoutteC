import { Component, OnInit } from '@angular/core';
import { Teammate } from 'src/app/models/teammates.model';
import { TeammateService } from 'src/app/services/teammate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-update-teammate',
  templateUrl: './update-teammate.component.html',
  styleUrls: ['./update-teammate.component.css']
})
export class UpdateTeammateComponent implements OnInit {

  firstNameTeammate: string;
  lastNameTeammate: string;
  usernameTeammate: string;
  mailTeammate: string;
  phoneTeammate: string;
  password: string;
  statusTeammate: string;
  jobTeammate: string;
  nameAgency: string;
  dateTeammate: string;

  teammateForm: FormGroup;
  teammates: Teammate[];
  teammateSubscription: Subscription;

  constructor(private teammateService: TeammateService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private agencyService: AgencyService) { }

  agencies = this.agencyService.emitAgencySubject();

  ngOnInit(): void {
    const idTeammate = this.route.snapshot.params['idTeammate'];
    console.log(idTeammate);
    this.firstNameTeammate = this.teammateService.getTeammateById(+idTeammate).firstNameTeammate;
    this.lastNameTeammate = this.teammateService.getTeammateById(+idTeammate).lastNameTeammate;
    this.usernameTeammate = this.teammateService.getTeammateById(+idTeammate).usernameTeammate;
    this.mailTeammate = this.teammateService.getTeammateById(+idTeammate).mailTeammate;
    this.phoneTeammate = this.teammateService.getTeammateById(+idTeammate).phoneTeammate;
    this.password = this.teammateService.getTeammateById(+idTeammate).password;
    this.statusTeammate = this.teammateService.getTeammateById(+idTeammate).statusTeammate;
    this.jobTeammate = this.teammateService.getTeammateById(+idTeammate).jobTeammate;
    this.nameAgency = this.teammateService.getTeammateById(+idTeammate).nameAgency;
    this.dateTeammate = this.teammateService.getTeammateById(+idTeammate).dateTeammate;

    this.teammateSubscription = this.teammateService.teammateSubject.subscribe(
      (teammates: Teammate[]) => {
        this.teammates = teammates;
      }
    );
    this.teammateService.emitTeammateSubject();
  }

}
