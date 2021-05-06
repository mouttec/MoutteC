import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyFormsComponent } from './agency-forms.component';

describe('AgencyFormsComponent', () => {
  let component: AgencyFormsComponent;
  let fixture: ComponentFixture<AgencyFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
