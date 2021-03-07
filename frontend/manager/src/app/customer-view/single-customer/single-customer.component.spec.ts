import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCustomerComponent } from './single-customer.component';

describe('SingleCustomerComponent', () => {
  let component: SingleCustomerComponent;
  let fixture: ComponentFixture<SingleCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
