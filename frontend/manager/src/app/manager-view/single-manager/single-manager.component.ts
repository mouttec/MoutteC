import { ManagerService } from './../../services/manager.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-manager',
  templateUrl: './single-manager.component.html',
  styleUrls: ['./single-manager.component.css']
})
export class SingleManagerComponent implements OnInit {

  currentManager = null;
  firstNameManager: string;
  lastNameManager: string;
  usernameManager: string;
  mailManager: string;
  phoneManager: string;
  passwordManager: string;
  statusManager: string;
  dateManager: string;

  constructor(private managerService: ManagerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getManager(this.route.snapshot.paramMap.get('id'));
  }

  getManager(idManager): void {
    this.managerService.getManagerById(idManager)
      .subscribe(
        manager => {
          this.currentManager = manager;
          this.firstNameManager = this.currentManager.data.firstNameManager;
          this.lastNameManager = this.currentManager.data.lastNameManager;
          this.usernameManager = this.currentManager.data.usernameManager;
          this.mailManager = this.currentManager.data.mailManager;
          this.phoneManager = this.currentManager.data.phoneManager;
          this.passwordManager = this.currentManager.data.passwordManager;
          this.statusManager = this.currentManager.data.statusManager;
          this.dateManager = this.currentManager.data.dateManager;
        },
        error => {
          console.log(error);
        });
  }
}
