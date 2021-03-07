import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementOfDayComponent } from './payement-of-day.component';

describe('PayementOfDayComponent', () => {
  let component: PayementOfDayComponent;
  let fixture: ComponentFixture<PayementOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
