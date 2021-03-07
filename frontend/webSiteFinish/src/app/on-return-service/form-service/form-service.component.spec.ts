import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServiceComponent } from './form-service.component';

describe('FormServiceComponent', () => {
  let component: FormServiceComponent;
  let fixture: ComponentFixture<FormServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
