import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormsComponent } from './customer-forms.component';

describe('CustomerFormsComponent', () => {
  let component: CustomerFormsComponent;
  let fixture: ComponentFixture<CustomerFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
