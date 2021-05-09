import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Subject, Observable } from 'rxjs';
// import { Event } from 'src/app/models/calendar.model';

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

  eventsSubject = new Subject<any[]>();
  api= 'http://localhost:8888/MoutteCAPI/backend/api/calendar/listCalendar.php';
  private events: Event[];

  constructor(private httpClient: HttpClient) { }

  emitEventSubject() {
    this.eventsSubject.next(this.events.slice());
  }

  readListEvent() {
    this.httpClient.get<Event[]>(`${this.api}`).subscribe(
      (events) => {
        this.events = events;
        this.emitEventSubject();
        console.log(events);
      },
      (error) => {
        console.log('erreur de lecture des événements du calendrier' + error);
      }
    );
    return this.httpClient.get<Event[]>(`${this.api}`);
  }

  // readListEvent(): Observable<Event[]>{
  //   return this.httpClient.get<Event[]>(`${this.PHP_API_SERVER}`);
  // }

  // getEventsById(idCalendar: number): any {
  //   const event = this.events.find(
  //     (eventObject) => {
  //       return eventObject.idCalendar === idCalendar;
  //     }
  //   );
  //   return event;
  // }

}


