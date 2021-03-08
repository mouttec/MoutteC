import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationServiceComponent } from './explanation-service.component';

describe('ExplanationServiceComponent', () => {
  let component: ExplanationServiceComponent;
  let fixture: ComponentFixture<ExplanationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplanationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
