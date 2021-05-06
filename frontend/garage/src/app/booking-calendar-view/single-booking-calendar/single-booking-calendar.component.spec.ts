import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookingCalendarComponent } from './single-booking-calendar.component';

describe('SingleBookingCalendarComponent', () => {
  let component: SingleBookingCalendarComponent;
  let fixture: ComponentFixture<SingleBookingCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookingCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
