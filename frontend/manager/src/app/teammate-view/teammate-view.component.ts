import { Teammate } from '../models/teammates.model';
import { TeammateService } from '../services/teammate.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teammate-view',
  templateUrl: './teammate-view.component.html',
  styleUrls: ['./teammate-view.component.css']
})
export class TeammateViewComponent implements OnInit, OnDestroy {

  teammates: Teammate[];
  teammateSubscription: Subscription;

  constructor(private teammateService: TeammateService) { }

  ngOnInit(): void {
    this.teammateSubscription = this.teammateService.teammateSubject.subscribe(
      (teammates: Teammate[]) => {
        console.log('teammates', teammates);
        this.teammates = teammates;
      });
  }

  ngOnDestroy(): void {
    this.teammateSubscription.unsubscribe();
  }
}
