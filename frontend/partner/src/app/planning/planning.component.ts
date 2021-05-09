import { CustomDateFormatter } from './custom-date-formatter.provider';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { isSameDay, isSameMonth, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay, format } from 'date-fns';
import { CalendarDateFormatter, CalendarEvent, CalendarEventAction, CalendarView, CalendarWeekViewBeforeRenderEvent, CalendarDayViewBeforeRenderEvent, DAYS_OF_WEEK } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CalendarService } from '../services/calendar.service';

const colors: any = {
  grey: {
    primary: '#6A6A6A',
    secondary: '#A7A7A7',
  }
};

registerLocaleData(localeFr);


@Component({
  selector: 'app-planning',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})

export class PlanningComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Week;

  excludeDays: number[] = [0, 6];
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  events: Observable<CalendarEvent<{ event: CalendarEvent }>[]>;

  locale: string = 'fr';

  activeDayIsOpen: boolean = true;

  changeDay(date: Date): void {
    this.viewDate = date;
    this.view = CalendarView.Day;
  }

  constructor(private modal: NgbModal, private cdr: ChangeDetectorRef, private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents() {
    this.events = this.calendarService.readListEvent();
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
