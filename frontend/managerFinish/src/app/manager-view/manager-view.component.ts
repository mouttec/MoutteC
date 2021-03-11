import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ManagerService } from '../services/manager.service';
import { Manager } from './../models/manager.model';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.css']
})
export class ManagerViewComponent implements OnInit, OnInit, OnDestroy {

  managers!: Manager[];
  managerSubscription!: Subscription;

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.managerSubscription = this.managerService.managerSubject.subscribe(
      (managers: Manager[]) => {
        this.managers = managers;
      }
    );
    this.managerService.emitManagerSubject();
  }

  ngOnDestroy(): void {
    this.managerSubscription.unsubscribe();
  }

}
