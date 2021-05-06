import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlybillingViewComponent } from './monthlybilling-view.component';

describe('MonthlybillingViewComponent', () => {
  let component: MonthlybillingViewComponent;
  let fixture: ComponentFixture<MonthlybillingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlybillingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlybillingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
