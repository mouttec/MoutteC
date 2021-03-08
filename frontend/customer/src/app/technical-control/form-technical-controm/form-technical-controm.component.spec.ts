import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTechnicalContromComponent } from './form-technical-controm.component';

describe('FormTechnicalContromComponent', () => {
  let component: FormTechnicalContromComponent;
  let fixture: ComponentFixture<FormTechnicalContromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTechnicalContromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTechnicalContromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
