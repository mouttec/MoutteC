import { Component, Input, OnInit } from '@angular/core';
import { TeammateService } from 'src/app/services/teammate.service';

@Component({
  selector: 'app-teammate',
  templateUrl: './teammate.component.html',
  styleUrls: ['./teammate.component.css']
})
export class TeammateComponent implements OnInit {

  @Input() indexOfTeammate: number;
  @Input() idTeammate: number;
  @Input() firstNameTeammate: string;
  @Input() lastNameTeammate: string;
  @Input() usernameTeammate: string;
  @Input() mailTeammate: string;
  @Input() phoneTeammate: string;
  @Input() password: string;
  @Input() statusTeammate: string;
  @Input() jobTeammate: string;
  @Input() nameAgency: string;
  @Input() superAdmin: boolean;
  @Input() dateTeammate: string;

  constructor(private teammateService: TeammateService) { }

  ngOnInit(): void {
  }

  getStatusTeammate(): string {
    return this.statusTeammate;
  }

  getOpacityTeammate(): 1| 0.5 {
    if (this.statusTeammate === 'Activer') {
      return 1;
    } else if (this.statusTeammate === 'Désactiver') {
      return 0.5;
    }
  }

  getColorTeammate(): 'black' | '#A7A7A7' {
    if (this.statusTeammate === 'Activer') {
      return 'black';
    } else if (this.statusTeammate === 'Désactiver') {
      return '#A7A7A7';
    }
  }

  onSwitchTeammate(): void {
    this.teammateService.switchTeammateActivate(this.indexOfTeammate);
  }

  onSwitchNoTeammate(): void {
    this.teammateService.switchNoTeammate(this.indexOfTeammate);
  }

}
