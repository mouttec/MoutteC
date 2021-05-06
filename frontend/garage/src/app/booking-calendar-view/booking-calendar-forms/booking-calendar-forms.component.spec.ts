import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCalendarFormsComponent } from './booking-calendar-forms.component';

describe('BookingCalendarFormsComponent', () => {
  let component: BookingCalendarFormsComponent;
  let fixture: ComponentFixture<BookingCalendarFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCalendarFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCalendarFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
