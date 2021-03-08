import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalControlComponent } from './technical-control.component';

describe('TechnicalControlComponent', () => {
  let component: TechnicalControlComponent;
  let fixture: ComponentFixture<TechnicalControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
