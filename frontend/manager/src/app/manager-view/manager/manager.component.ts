import { Manager } from './../../models/managers.models';
import { ManagerService } from './../../services/manager.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  @Input() IndexOfManager: number;
  @Input() idManager: number;
  @Input() firstNameManager: string;
  @Input() lastNameManager: string;
  @Input() usernameManager: string;
  @Input() mailManager: string;
  @Input() phoneManager: string;
  @Input() passwordManager: string;
  @Input() statusManager: string;
  @Input() dateManager: string;

  managers: Manager[];

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
  }

  getStatusManager(): string {
    return this.statusManager;
  }

  getOpacityManager(): 1| 0.5 {
    if (this.statusManager === 'Activer') {
      return 1;
    } else if (this.statusManager === 'Désactiver') {
      return 0.5;
    }
  }

  getColorManager(): 'black' | '#b1b1b1' {
    if (this.statusManager === 'Activer') {
      return 'black';
    } else if (this.statusManager === 'Désactiver') {
      return '#b1b1b1';
    }
  }

  onSwitchManager(): void {
    this.managerService.switchManagerActivate(this.IndexOfManager);
  }

  onSwitchNoManager(): void {
    this.managerService.switchNoManager(this.IndexOfManager);
  }

  onDeleteManager(idManager) {
    this.managerService.deleteManagerById(idManager)
    .subscribe(
      (manager: Manager) => {
        console.log("Manager delected ", manager);
        this.managerService.readListManager().subscribe((managers: Manager[]) => {
          this.managers = managers
        })
      }
    )}
}
