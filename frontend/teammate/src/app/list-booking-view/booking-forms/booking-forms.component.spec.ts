import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormsComponent } from './booking-forms.component';

describe('BookingFormsComponent', () => {
  let component: BookingFormsComponent;
  let fixture: ComponentFixture<BookingFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
