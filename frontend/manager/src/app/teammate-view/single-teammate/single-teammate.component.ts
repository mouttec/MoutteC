import { Component, OnInit } from '@angular/core';
import { TeammateService } from '../../services/teammate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-teammate',
  templateUrl: './single-teammate.component.html',
  styleUrls: ['./single-teammate.component.css']
})
export class SingleTeammateComponent implements OnInit {

  currentTeammate = null;
  firstNameTeammate: string;
  lastNameTeammate: string;
  usernameTeammate: string;
  mailTeammate: string;
  phoneTeammate: string;
  password: string;
  statusTeammate: string;
  jobTeammate: string;
  locationAgency: string;
  dateTeammate: string;

  constructor(private teammateService: TeammateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeammate(this.route.snapshot.paramMap.get('id'));
  }

  getTeammate(idTeammate): void {
    this.teammateService.getTeammateById(idTeammate)
      .subcribe(
        teammate => {
          this.currentTeammate = teammate;
          this.firstNameTeammate = this.currentTeammate.data.firstNameTeammate;
          this.lastNameTeammate = this.currentTeammate.data.lastNameTeammate;
          this.usernameTeammate = this.currentTeammate.data.usernameTeammate;
          this.mailTeammate = this.currentTeammate.data.mailTeammate;
          this.phoneTeammate = this.currentTeammate.data.phoneTeammate;
          this.password = this.currentTeammate.data.password;
          this.statusTeammate = this.currentTeammate.data.statusTeammate;
          this.jobTeammate = this.currentTeammate.data.jobTeammate;
          this.locationAgency = this.currentTeammate.data.locationAgency;
          this.dateTeammate = this.currentTeammate.data.dateTeammate;
        },
        error => {
          console.log(error);
        }
      )
  }
}
