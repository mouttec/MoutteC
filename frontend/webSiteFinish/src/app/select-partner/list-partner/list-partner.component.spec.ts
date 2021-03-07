import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartnerComponent } from './list-partner.component';

describe('ListPartnerComponent', () => {
  let component: ListPartnerComponent;
  let fixture: ComponentFixture<ListPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
