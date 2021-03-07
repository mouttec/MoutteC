import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePayementOfDayComponent } from './single-payement-of-day.component';

describe('SinglePayementOfDayComponent', () => {
  let component: SinglePayementOfDayComponent;
  let fixture: ComponentFixture<SinglePayementOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePayementOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePayementOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
