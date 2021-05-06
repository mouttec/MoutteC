import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPersoSingleComponent } from './calendar-perso-single.component';

describe('CalendarPersoSingleComponent', () => {
  let component: CalendarPersoSingleComponent;
  let fixture: ComponentFixture<CalendarPersoSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarPersoSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPersoSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
