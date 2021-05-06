import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePartnerComponent } from './single-partner.component';

describe('SinglePartnerComponent', () => {
  let component: SinglePartnerComponent;
  let fixture: ComponentFixture<SinglePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
