import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMouttecComponent } from './calendar-mouttec.component';

describe('CalendarMouttecComponent', () => {
  let component: CalendarMouttecComponent;
  let fixture: ComponentFixture<CalendarMouttecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarMouttecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMouttecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
