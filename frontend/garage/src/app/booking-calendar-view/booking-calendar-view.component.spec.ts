import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCalendarViewComponent } from './booking-calendar-view.component';

describe('BookingCalendarViewComponent', () => {
  let component: BookingCalendarViewComponent;
  let fixture: ComponentFixture<BookingCalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCalendarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
