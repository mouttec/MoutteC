import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CustomDateFormatter } from 'src/app/planning/custom-date-formatter.provider';
import { startOfDay, endOfDay, isSameDay, isSameMonth, addHours  } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarDateFormatter, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
import { CalendarService } from '../services/calendar.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models/calendar.model';

registerLocaleData(localeFr);

@Component({
  selector: 'app-calendar-perso',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar-perso.component.html',
  styleUrls: ['./calendar-perso.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class CalendarPersoComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Week;

  id: number;

  excludeDays: number[] = [0, 6];
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  events: Event[];
  eventSubscription: Subscription;


  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fas fa-fw fa-pencil-alt"></i>',
  //     a11yLabel: 'Edit',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       // this.handleEvent('Edited', event);
  //     },
  //   },
  //   {
  //     label: '<i class="fas fa-fw fa-trash-alt"></i>',
  //     a11yLabel: 'Delete',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter((iEvent) => iEvent !== event);
  //       // this.handleEvent('Deleted', event);
  //     },
  //   },
  // ];

  refresh: Subject<any> = new Subject();



  locale: string = 'fr';

  activeDayIsOpen: boolean = true;

  changeDay(date: Date) {
    this.viewDate = date;
    this.view = CalendarView.Day;
  }


  constructor(private modal: NgbModal, private router: Router, private calendarService: CalendarService) { }

  ngOnInit(): void {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    this.router.navigate(['/calendarPerso', event.id]);
  }

}
