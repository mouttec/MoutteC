import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFormsComponent } from './manager-forms.component';

describe('ManagerFormsComponent', () => {
  let component: ManagerFormsComponent;
  let fixture: ComponentFixture<ManagerFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
