import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit, OnDestroy {

  constructor(private calendarService: CalendarService) { }

  calendars: any[];
  calendarSubscription: Subscription;
  h1: string;
  statusCalendar: string;

  ngOnInit(): void {
    this.calendarSubscription = this.calendarService.calendarSubject.subscribe(
      (calendars: any[]) => {
        this.calendars = calendars;
      }
    );
    this.calendarService.emitCalendarSubject();
  }

  ngOnDestroy(): void {
    this.calendarSubscription.unsubscribe();
  }

}
