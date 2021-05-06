import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCalendarView1Component } from './booking-calendar-view1.component';

describe('BookingCalendarView1Component', () => {
  let component: BookingCalendarView1Component;
  let fixture: ComponentFixture<BookingCalendarView1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCalendarView1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCalendarView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
