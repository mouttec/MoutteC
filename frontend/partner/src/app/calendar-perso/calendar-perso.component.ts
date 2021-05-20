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

const colors: any = {
  grey: {
    primary: '#6A6A6A',
    secondary: '#A7A7A7',
  }
};

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

  // events: CalendarEvent[] = [
  //   {
  //     id: 1,
  //     title: 'test1',
  //     start: new Date('2021-05-07 14:00:00'),
  //     end: new Date('2021-05-07 14:30:00'),
  //     color: colors.grey
  //     // draggable: true,
  //     // resizable: {
  //     //   beforeStart: true,
  //     //   afterEnd: true
  //     // }
  //   },
  //   {
  //     id: 2,
  //     title: 'test2',
  //     start: new Date('2021-05-06 07:30:00'),
  //     end: new Date('2021-05-06 08:15:00'),
  //     color: colors.grey
  //     // draggable: true,
  //     // resizable: {
  //     //   beforeStart: true,
  //     //   afterEnd: true
  //     // }
  //   },
  //   {
  //     id: 3,
  //     title: 'test3',
  //     start: new Date('2021-05-06 12:00:00'),
  //     end: new Date('2021-05-06 12:30:00'),
  //     color: colors.grey
  //     // draggable: true,
  //     // resizable: {
  //     //   beforeStart: true,
  //     //   afterEnd: true
  //     // }
  //   }
  // ];
  events: CalendarEvent[];
  eventSubscription: Subscription;

  refresh: Subject<any> = new Subject();

  locale: string = 'fr';

  activeDayIsOpen: boolean = true;

  changeDay(date: Date) {
    this.viewDate = date;
    this.view = CalendarView.Day;
  }


  constructor(private modal: NgbModal, private router: Router, private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.eventSubscription = this.calendarService.eventsSubject.subscribe(
      (events: any []) => {
        this.events = events;
      }
    );
    this.calendarService.readListEvent();
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

