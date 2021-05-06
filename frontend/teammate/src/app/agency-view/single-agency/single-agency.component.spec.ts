import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAgencyComponent } from './single-agency.component';

describe('SingleAgencyComponent', () => {
  let component: SingleAgencyComponent;
  let fixture: ComponentFixture<SingleAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
