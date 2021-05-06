import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartnerComponent } from './update-partner.component';

describe('UpdatePartnerComponent', () => {
  let component: UpdatePartnerComponent;
  let fixture: ComponentFixture<UpdatePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
