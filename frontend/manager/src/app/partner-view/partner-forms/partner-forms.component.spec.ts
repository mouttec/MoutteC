import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerFormsComponent } from './partner-forms.component';

describe('PartnerFormsComponent', () => {
  let component: PartnerFormsComponent;
  let fixture: ComponentFixture<PartnerFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
