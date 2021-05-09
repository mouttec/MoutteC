export class CalendarEvent {

  constructor(public idCalendar: number, public title: string, public start: string, public end: string, public idBooking?: number) {}
}
