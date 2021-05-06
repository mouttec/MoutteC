import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCalendar1Component } from './booking-calendar1.component';

describe('BookingCalendar1Component', () => {
  let component: BookingCalendar1Component;
  let fixture: ComponentFixture<BookingCalendar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCalendar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCalendar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
