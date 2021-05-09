import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Event } from 'src/app/models/events.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventSubject = new Subject<Event[]>();
  api= 'http://localhost:8888/MoutteCAPI/backend/api/calendar/listCalendar.php';
  private events: Event[];

  constructor(private httpClient: HttpClient) { }

  emitEventSubject() {
    this.eventSubject.next(this.events.slice());
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
}
