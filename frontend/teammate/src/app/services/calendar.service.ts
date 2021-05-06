import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { Calendar } from 'src/app/models/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  calendarSubject = new Subject<any[]>();

  calendars: any[] = [
    {
      day: 'Lun 12 avril',
      hours: {
        h7q2: {
          hoursForth: '07:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h7q3: {
          hoursForth: '07:45',
          firstNameCustomer: 'test',
          lastNameCustomer: 'last',
          phoneCustomer: '0123456789',
          statusCalendar: 'taken'
        },
        h8: {
          hoursForth: '08:00',
          firstNameCustomer: 'test',
          lastNameCustomer: 'last',
          phoneCustomer: '0123456789',
          statusCalendar: 'taken'
        },
        h8q1: {
          hoursForth: '08:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h8q2: {
            hoursForth: '08:30',
            firstNameCustomer: '',
            lastNameCustomer: '',
            phoneCustomer: '',
            statusCalendar: 'available'
          },
        h8q3:  {
          hoursForth: '08:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h9:  {
          hoursForth: '09:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h9q1:  {
          hoursForth: '09:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h9q2:  {
          hoursForth: '09:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h9q3:  {
          hoursForth: '09:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h10:  {
          hoursForth: '10:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h10q1:  {
          hoursForth: '10:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h10q2:  {
          hoursForth: '10:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h10q3:  {
          hoursForth: '10:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h11:  {
          hoursForth: '11:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h11q1:  {
          hoursForth: '11:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h11q2:  {
          hoursForth: '11:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h11q3:  {
          hoursForth: '11:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h12:  {
          hoursForth: '12:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h12q1:  {
          hoursForth: '12:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h12q2:  {
          hoursForth: '12:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'block'
        },
        h12q3:  {
          hoursForth: '12:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'block'
        },
        h13:  {
          hoursForth: '13:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'block'
        },
        h13q1:  {
          hoursForth: '13:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'block'
        },
        h13q2:  {
          hoursForth: '13:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'block'
        },
        h13q3:  {
          hoursForth: '13:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h14:  {
          hoursForth: '14:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h14q1:  {
          hoursForth: '14:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h14q2:  {
          hoursForth: '14:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h14q3:  {
          hoursForth: '14:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h15:  {
          hoursForth: '15:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h15q1:  {
          hoursForth: '15:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h15q2:  {
          hoursForth: '15:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h15q3:  {
          hoursForth: '15:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h16:  {
          hoursForth: '16:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h16q1:  {
          hoursForth: '16:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h16q2:  {
          hoursForth: '16:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h16q3:  {
          hoursForth: '16:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h17:  {
          hoursForth: '17:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h17q1:  {
          hoursForth: '17:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h17q2:  {
          hoursForth: '17:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h17q3:  {
          hoursForth: '17:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h18:  {
          hoursForth: '18:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h18q1:  {
          hoursForth: '18:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h18q2:  {
          hoursForth: '18:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h18q3:  {
          hoursForth: '18:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19:  {
          hoursForth: '19:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h19q1:  {
          hoursForth: '19:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h19q2:  {
          hoursForth: '19:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h19q3:  {
          hoursForth: '19:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h20:  {
          hoursForth: '20:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h20q1:  {
          hoursForth: '20:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        },
        h20q2:  {
          hoursForth: '20:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: '',
          statusCalendar: 'available'
        }
      }
    },
    {
      day: 'Mar 13 avril',
      hours: {
        h7q2: {
          hoursForth: '07:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h7q3: {
          hoursForth: '07:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8: {
          hoursForth: '08:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8q1: {
          hoursForth: '08:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8q2: {
            hoursForth: '08:30',
            firstNameCustomer: '',
            lastNameCustomer: '',
            phoneCustomer: ''
          },
        h8q3:  {
          hoursForth: '08:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9:  {
          hoursForth: '09:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q1:  {
          hoursForth: '09:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q2:  {
          hoursForth: '09:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q3:  {
          hoursForth: '09:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10:  {
          hoursForth: '10:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q1:  {
          hoursForth: '10:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q2:  {
          hoursForth: '10:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q3:  {
          hoursForth: '10:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11:  {
          hoursForth: '11:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q1:  {
          hoursForth: '11:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q2:  {
          hoursForth: '11:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q3:  {
          hoursForth: '11:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12:  {
          hoursForth: '12:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q1:  {
          hoursForth: '12:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q2:  {
          hoursForth: '12:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q3:  {
          hoursForth: '12:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13:  {
          hoursForth: '13:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q1:  {
          hoursForth: '13:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q2:  {
          hoursForth: '13:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q3:  {
          hoursForth: '13:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14:  {
          hoursForth: '14:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q1:  {
          hoursForth: '14:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q2:  {
          hoursForth: '14:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q3:  {
          hoursForth: '14:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15:  {
          hoursForth: '15:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q1:  {
          hoursForth: '15:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q2:  {
          hoursForth: '15:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q3:  {
          hoursForth: '15:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16:  {
          hoursForth: '16:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q1:  {
          hoursForth: '16:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q2:  {
          hoursForth: '16:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q3:  {
          hoursForth: '16:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17:  {
          hoursForth: '17:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q1:  {
          hoursForth: '17:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q2:  {
          hoursForth: '17:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q3:  {
          hoursForth: '17:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18:  {
          hoursForth: '18:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q1:  {
          hoursForth: '18:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q2:  {
          hoursForth: '18:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q3:  {
          hoursForth: '18:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19:  {
          hoursForth: '19:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q1:  {
          hoursForth: '19:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q2:  {
          hoursForth: '19:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q3:  {
          hoursForth: '19:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20:  {
          hoursForth: '20:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20q1:  {
          hoursForth: '20:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20q2:  {
          hoursForth: '20:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        }
      }
    },
    {
      day: 'Mer 14 avril',
      hours: {
        h7q2: {
          hoursForth: '07:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h7q3: {
          hoursForth: '07:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8: {
          hoursForth: '08:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8q1: {
          hoursForth: '08:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8q2: {
            hoursForth: '08:30',
            firstNameCustomer: '',
            lastNameCustomer: '',
            phoneCustomer: ''
          },
        h8q3:  {
          hoursForth: '08:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9:  {
          hoursForth: '09:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q1:  {
          hoursForth: '09:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q2:  {
          hoursForth: '09:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q3:  {
          hoursForth: '09:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10:  {
          hoursForth: '10:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q1:  {
          hoursForth: '10:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q2:  {
          hoursForth: '10:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q3:  {
          hoursForth: '10:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11:  {
          hoursForth: '11:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q1:  {
          hoursForth: '11:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q2:  {
          hoursForth: '11:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q3:  {
          hoursForth: '11:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12:  {
          hoursForth: '12:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q1:  {
          hoursForth: '12:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q2:  {
          hoursForth: '12:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q3:  {
          hoursForth: '12:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13:  {
          hoursForth: '13:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q1:  {
          hoursForth: '13:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q2:  {
          hoursForth: '13:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q3:  {
          hoursForth: '13:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14:  {
          hoursForth: '14:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q1:  {
          hoursForth: '14:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q2:  {
          hoursForth: '14:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q3:  {
          hoursForth: '14:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15:  {
          hoursForth: '15:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q1:  {
          hoursForth: '15:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q2:  {
          hoursForth: '15:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q3:  {
          hoursForth: '15:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16:  {
          hoursForth: '16:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q1:  {
          hoursForth: '16:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q2:  {
          hoursForth: '16:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q3:  {
          hoursForth: '16:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17:  {
          hoursForth: '17:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q1:  {
          hoursForth: '17:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q2:  {
          hoursForth: '17:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q3:  {
          hoursForth: '17:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18:  {
          hoursForth: '18:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q1:  {
          hoursForth: '18:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q2:  {
          hoursForth: '18:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q3:  {
          hoursForth: '18:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19:  {
          hoursForth: '19:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q1:  {
          hoursForth: '19:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q2:  {
          hoursForth: '19:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q3:  {
          hoursForth: '19:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20:  {
          hoursForth: '20:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20q1:  {
          hoursForth: '20:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20q2:  {
          hoursForth: '20:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        }
      }
    },
    {
      day: 'Jeu 15 avril',
      hours: {
        h7q2: {
          hoursForth: '07:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h7q3: {
          hoursForth: '07:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8: {
          hoursForth: '08:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8q1: {
          hoursForth: '08:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8q2: {
            hoursForth: '08:30',
            firstNameCustomer: '',
            lastNameCustomer: '',
            phoneCustomer: ''
          },
        h8q3:  {
          hoursForth: '08:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9:  {
          hoursForth: '09:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q1:  {
          hoursForth: '09:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q2:  {
          hoursForth: '09:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q3:  {
          hoursForth: '09:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10:  {
          hoursForth: '10:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q1:  {
          hoursForth: '10:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q2:  {
          hoursForth: '10:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q3:  {
          hoursForth: '10:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11:  {
          hoursForth: '11:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q1:  {
          hoursForth: '11:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q2:  {
          hoursForth: '11:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q3:  {
          hoursForth: '11:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12:  {
          hoursForth: '12:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q1:  {
          hoursForth: '12:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q2:  {
          hoursForth: '12:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q3:  {
          hoursForth: '12:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13:  {
          hoursForth: '13:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q1:  {
          hoursForth: '13:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q2:  {
          hoursForth: '13:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q3:  {
          hoursForth: '13:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14:  {
          hoursForth: '14:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q1:  {
          hoursForth: '14:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q2:  {
          hoursForth: '14:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q3:  {
          hoursForth: '14:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15:  {
          hoursForth: '15:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q1:  {
          hoursForth: '15:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q2:  {
          hoursForth: '15:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q3:  {
          hoursForth: '15:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16:  {
          hoursForth: '16:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q1:  {
          hoursForth: '16:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q2:  {
          hoursForth: '16:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q3:  {
          hoursForth: '16:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17:  {
          hoursForth: '17:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q1:  {
          hoursForth: '17:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q2:  {
          hoursForth: '17:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q3:  {
          hoursForth: '17:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18:  {
          hoursForth: '18:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q1:  {
          hoursForth: '18:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q2:  {
          hoursForth: '18:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q3:  {
          hoursForth: '18:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19:  {
          hoursForth: '19:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q1:  {
          hoursForth: '19:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q2:  {
          hoursForth: '19:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q3:  {
          hoursForth: '19:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20:  {
          hoursForth: '20:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20q1:  {
          hoursForth: '20:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20q2:  {
          hoursForth: '20:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        }
      }
    },
    {
      day: 'Ven 16 avril',
      hours: {
        h7q2: {
          hoursForth: '07:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h7q3: {
          hoursForth: '07:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8: {
          hoursForth: '08:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8q1: {
          hoursForth: '08:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h8q2: {
            hoursForth: '08:30',
            firstNameCustomer: '',
            lastNameCustomer: '',
            phoneCustomer: ''
          },
        h8q3:  {
          hoursForth: '08:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9:  {
          hoursForth: '09:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q1:  {
          hoursForth: '09:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q2:  {
          hoursForth: '09:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h9q3:  {
          hoursForth: '09:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10:  {
          hoursForth: '10:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q1:  {
          hoursForth: '10:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q2:  {
          hoursForth: '10:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h10q3:  {
          hoursForth: '10:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11:  {
          hoursForth: '11:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q1:  {
          hoursForth: '11:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q2:  {
          hoursForth: '11:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h11q3:  {
          hoursForth: '11:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12:  {
          hoursForth: '12:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q1:  {
          hoursForth: '12:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q2:  {
          hoursForth: '12:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h12q3:  {
          hoursForth: '12:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13:  {
          hoursForth: '13:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q1:  {
          hoursForth: '13:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q2:  {
          hoursForth: '13:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h13q3:  {
          hoursForth: '13:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14:  {
          hoursForth: '14:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q1:  {
          hoursForth: '14:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q2:  {
          hoursForth: '14:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h14q3:  {
          hoursForth: '14:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15:  {
          hoursForth: '15:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q1:  {
          hoursForth: '15:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q2:  {
          hoursForth: '15:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h15q3:  {
          hoursForth: '15:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16:  {
          hoursForth: '16:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q1:  {
          hoursForth: '16:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q2:  {
          hoursForth: '16:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h16q3:  {
          hoursForth: '16:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17:  {
          hoursForth: '17:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q1:  {
          hoursForth: '17:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q2:  {
          hoursForth: '17:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h17q3:  {
          hoursForth: '17:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18:  {
          hoursForth: '18:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q1:  {
          hoursForth: '18:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q2:  {
          hoursForth: '18:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h18q3:  {
          hoursForth: '18:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19:  {
          hoursForth: '19:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q1:  {
          hoursForth: '19:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q2:  {
          hoursForth: '19:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h19q3:  {
          hoursForth: '19:45',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20:  {
          hoursForth: '20:00',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20q1:  {
          hoursForth: '20:15',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        },
        h20q2:  {
          hoursForth: '20:30',
          firstNameCustomer: '',
          lastNameCustomer: '',
          phoneCustomer: ''
        }
      }
    },
  ];
  constructor() { }

  emitCalendarSubject(): any[] {
    this.calendarSubject.next(this.calendars.slice());
    return this.calendars;
  }

}
