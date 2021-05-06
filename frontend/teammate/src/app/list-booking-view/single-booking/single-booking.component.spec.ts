import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookingComponent } from './single-booking.component';

describe('SingleBookingComponent', () => {
  let component: SingleBookingComponent;
  let fixture: ComponentFixture<SingleBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
