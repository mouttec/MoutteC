import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar-perso-single',
  templateUrl: './calendar-perso-single.component.html',
  styleUrls: ['./calendar-perso-single.component.css']
})
export class CalendarPersoSingleComponent implements OnInit {

  title: string;

  constructor(private calendarService: CalendarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    // this.title = this.calendarService.getEventsById(+id).title;
  }

}
