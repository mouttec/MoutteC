import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { isSameDay, isSameMonth } from 'date-fns';
import { Subscription, Subject } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';
import { CustomDateFormatter } from './custom-date-formatter.provider';
import { CalendarDateFormatter, CalendarEvent, CalendarEventAction, CalendarView, CalendarWeekViewBeforeRenderEvent, CalendarDayViewBeforeRenderEvent, DAYS_OF_WEEK } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

const colors: any = {
  grey: {
    primary: '#6A6A6A',
    secondary: '#A7A7A7',
  }
};

registerLocaleData(localeFr);

@Component({
  selector: 'app-calendar-mouttec',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar-mouttec.component.html',
  styleUrls: ['./calendar-mouttec.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ]
})
export class CalendarMouttecComponent implements OnInit {

  events: any[];
  eventSubscription: Subscription;

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Week;

  excludeDays: number[] = [0, 6];
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        // this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  locale: string = 'fr';

  activeDayIsOpen: boolean = true;

  changeDay(date: Date): void {
    this.viewDate = date;
    this.view = CalendarView.Day;
  }

  constructor(private eventsService: EventsService, private modal: NgbModal, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.eventSubscription = this.eventsService.eventSubject.subscribe(
      (events: any []) => {
        this.events = events;
      }
    );
    this.eventsService.readListEvent();
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

  setView(view: CalendarView): void {
    this.view = view;
  }

  closeOpenMonthViewDay(): void {
    this.activeDayIsOpen = false;
  }

  beforeWeekViewRender(renderEvent: CalendarWeekViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (
            segment.date.getHours() >= 12 && segment.date.getMinutes() ===  30 &&
            segment.date.getHours() <= 13
          ) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }

  beforeWeekViewRender2(renderEvent: CalendarWeekViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (segment.date.getHours() === 13
          ) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }

  beforeWeekViewRender3(renderEvent: CalendarWeekViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (segment.date.getHours() >= 18 && segment.date.getMinutes() === 30 &&
          segment.date.getHours() <= 20
          ) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }

  beforeWeekViewRender4(renderEvent: CalendarWeekViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (segment.date.getHours() === 19
          ) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }

  beforeWeekViewRender5(renderEvent: CalendarWeekViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (segment.date.getHours() === 20
          ) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }

  beforeDayViewRender(renderEvent: CalendarDayViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (segment.date.getHours() >= 12 && segment.date.getMinutes() ===  30 &&
          segment.date.getHours() <= 13) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }

  beforeDayViewRender2(renderEvent: CalendarDayViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (segment.date.getHours() === 13) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }

  beforeDayViewRender3(renderEvent: CalendarWeekViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (segment.date.getHours() >= 18 && segment.date.getMinutes() === 30 &&
          segment.date.getHours() <= 20
          ) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }

  beforeDayViewRender4(renderEvent: CalendarWeekViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (segment.date.getHours() === 19
          ) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }

  beforeDayViewRender5(renderEvent: CalendarWeekViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (segment.date.getHours() === 20
          ) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }


}
