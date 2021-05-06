import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeammateService } from 'src/app/services/teammate.service';

@Component({
  selector: 'app-single-teammate',
  templateUrl: './single-teammate.component.html',
  styleUrls: ['./single-teammate.component.css']
})
export class SingleTeammateComponent implements OnInit {

  // currentTeammate = null;
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

  constructor(private teammateService: TeammateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.getTeammate(this.route.snapshot.paramMap.get('idTeammate'));
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
  }

  // getTeammate(idTeammate: any): void {
  //   this.teammateService.getTeammateById(idTeammate).subscribe(
  //     teammate => {
  //       this.currentTeammate = teammate;
  //       this.firstNameTeammate = this.currentTeammate.data.firstNameTeammate;
  //       this.lastNameTeammate = this.currentTeammate.data.lastNameTeammate;
  //       this.usernameTeammate = this.currentTeammate.data.usernameTeammate;
  //       this.mailTeammate = this.currentTeammate.data.mailTeammate;
  //       this.phoneTeammate = this.currentTeammate.data.phoneTeammate;
  //       this.password = this.currentTeammate.data.password;
  //       this.statusTeammate = this.currentTeammate.data.statusTeammate;
  //       this.jobTeammate = this.currentTeammate.data.jobTeammate;
  //       this.nameAgency = this.currentTeammate.data.nameAgency;
  //       this.dateTeammate = this.currentTeammate.data.dateTeammate;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }
}
