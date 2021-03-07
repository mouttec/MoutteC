import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementOfDayViewComponent } from './payement-of-day-view.component';

describe('PayementOfDayViewComponent', () => {
  let component: PayementOfDayViewComponent;
  let fixture: ComponentFixture<PayementOfDayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementOfDayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementOfDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
