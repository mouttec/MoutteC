import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPersoComponent } from './calendar-perso.component';

describe('CalendarPersoComponent', () => {
  let component: CalendarPersoComponent;
  let fixture: ComponentFixture<CalendarPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
