import { TeammateService } from './../services/teammate.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teammate-view',
  templateUrl: './teammate-view.component.html',
  styleUrls: ['./teammate-view.component.css']
})
export class TeammateViewComponent implements OnInit, OnDestroy {

  teammates: any[];
  teammateSubscription: Subscription;

  constructor(private teammateService: TeammateService) { }

  ngOnInit(): void {
    this.teammateSubscription = this.teammateService.teammateSubject.subscribe(
      (teammates: any[]) => {
        this.teammates = teammates;
      }
    );
    this.teammateService.emitTeammateSubject();
  }

  ngOnDestroy(): void {
    this.teammateSubscription.unsubscribe();
  }
}
