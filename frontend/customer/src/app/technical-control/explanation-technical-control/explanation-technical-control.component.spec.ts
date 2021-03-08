import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationTechnicalControlComponent } from './explanation-technical-control.component';

describe('ExplanationTechnicalControlComponent', () => {
  let component: ExplanationTechnicalControlComponent;
  let fixture: ComponentFixture<ExplanationTechnicalControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationTechnicalControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplanationTechnicalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
