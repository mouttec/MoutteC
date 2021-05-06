import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Subject, Observable } from 'rxjs';
import { Event } from 'src/app/models/calendar.model';

const colors: any = {
  orange: {
    primary: '#EF7B15',
    secondary: '#EF7B15',
  }

};

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  // eventsSubject = new Subject<any[]>();

  // events: CalendarEvent[] = [
  //   {
  //     id: 1,
  //     title: 'nom prenom test1',
  //     start: new Date('2021-04-26 14:00:00'),
  //     end: new Date('2021-04-26 14:30:00'),
  //     color: colors.orange,
  //     // draggable: true,
  //     // resizable: {
  //     //   beforeStart: true,
  //     //   afterEnd: true
  //     // }
  //   },
  //   {
  //     id: 2,
  //     title: 'nom prenom test2',
  //     start: new Date('2021-04-27 12:00:00'),
  //     end: new Date('2021-04-27 12:45:00'),
  //     color: colors.orange,
  //     // draggable: true,
  //     // resizable: {
  //     //   beforeStart: true,
  //     //   afterEnd: true
  //     // }
  //   },
  //   {
  //     id: 3,
  //     title: 'nnom prenom test3',
  //     start: new Date('2021-04-28 08:30:00'),
  //     end: new Date('2021-04-28 09:30:00'),
  //     color: colors.orange,
  //     // draggable: true,
  //     // resizable: {
  //     //   beforeStart: true,
  //     //   afterEnd: true
  //     // }
  //   },
  //   {
  //     id: 4,
  //     title: 'nom prenom test4',
  //     start: new Date('2021-04-27 12:45:00'),
  //     end: new Date('2021-04-27 13:45:00'),
  //     color: colors.orange,
  //     // draggable: true,
  //     // resizable: {
  //     //   beforeStart: true,
  //     //   afterEnd: true
  //     // }
  //   }
  // ];

  eventSubject = new Subject<Event[]>();
  PHP_API_SERVER = 'http://localhost:8888/MoutteC/backend/api/manager';
  private events: Event[];

  constructor(private httpClient: HttpClient) { }

  emitEvent(): void {
    this.eventSubject.next(this.events);
  }

  readListEvent(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.PHP_API_SERVER}`);
  }

  getEventsById(idCalendar: number): any {
    const event = this.events.find(
      (eventObject) => {
        return eventObject.idCalendar === idCalendar;
      }
    );
    return event;
  }

}


