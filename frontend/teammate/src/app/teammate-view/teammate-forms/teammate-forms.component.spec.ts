import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammateFormsComponent } from './teammate-forms.component';

describe('TeammateFormsComponent', () => {
  let component: TeammateFormsComponent;
  let fixture: ComponentFixture<TeammateFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammateFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammateFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
