import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyBillingComponent } from './monthly-billing.component';

describe('MonthlyBillingComponent', () => {
  let component: MonthlyBillingComponent;
  let fixture: ComponentFixture<MonthlyBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
