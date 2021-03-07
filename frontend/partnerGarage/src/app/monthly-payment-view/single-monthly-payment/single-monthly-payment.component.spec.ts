import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMonthlyPaymentComponent } from './single-monthly-payment.component';

describe('SingleMonthlyPaymentComponent', () => {
  let component: SingleMonthlyPaymentComponent;
  let fixture: ComponentFixture<SingleMonthlyPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMonthlyPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMonthlyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
