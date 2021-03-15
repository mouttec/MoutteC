import { TeammateService } from './../services/teammate.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Teammate } from '../models/teammate.model';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-teammate-view',
  templateUrl: './teammate-view.component.html',
  styleUrls: ['./teammate-view.component.css']
})
export class TeammateViewComponent implements OnInit, OnDestroy {

  teammates!: Teammate[];
  teammateSubscription!: Subscription;

  constructor(private teammateService: TeammateService) { }

  ngOnInit(): void {
    this.teammateSubscription = this.teammateService.teammateSubject.subscribe(
      (teammates: Teammate[]) => {
        this.teammates = teammates;
      }
    );
  }

  ngOnDestroy(): void {
    this.teammateSubscription.unsubscribe();
  }

}
