import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookingViewComponent } from './list-booking-view.component';

describe('ListBookingViewComponent', () => {
  let component: ListBookingViewComponent;
  let fixture: ComponentFixture<ListBookingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBookingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
