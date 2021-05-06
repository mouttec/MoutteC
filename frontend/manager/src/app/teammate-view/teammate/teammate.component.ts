import { Component, Input, OnInit } from '@angular/core';
import { TeammateService } from '../../services/teammate.service';
import { Teammate } from '../../models/teammates.model';

@Component({
  selector: 'app-teammate',
  templateUrl: './teammate.component.html',
  styleUrls: ['./teammate.component.css']
})
export class TeammateComponent implements OnInit {

  @Input() IndexOfTeammate: number;
  @Input() teammate: Teammate;
  @Input() action: string;
  @Input() idTeammate: number;
  @Input() firstNameTeammate: string;
  @Input() lastNameTeammate: string;
  @Input() usernameTeammate: string;
  @Input() mailTeammate: string;
  @Input() phoneTeammate: string;
  @Input() password: string;
  @Input() statusTeammate: string;
  @Input() jobTeammate: string;
  @Input() locationAgency: string;
  @Input() superAdmin: boolean;
  @Input() dateTeammate: string;

  teammates: Teammate[];

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

  // onSwitchTeammate(): void {
  //   this.teammateService.switchTeammateActivate(this.IndexOfTeammate);
  // }

  // onSwitchNoTeammate(): void {
  //   this.teammateService.switchNoTeammate(this.IndexOfTeammate);
  // }

  // onDeleteTeammate(idTeammate) {
  //   this.teammateService.deleteTeammateById(idTeammate)
  //   .subscribe(
  //     (teammate: Teammate) => {
  //       console.log('Teammate delected', teammate);
  //       this.teammateService.readListTeammante().subscribe((teammates: Teammate[]) => {
  //         this.teammates = teammates;
  //       });
  //     }
  //   );
  // }

}
