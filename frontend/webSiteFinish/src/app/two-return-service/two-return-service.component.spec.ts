import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoReturnServiceComponent } from './two-return-service.component';

describe('TwoReturnServiceComponent', () => {
  let component: TwoReturnServiceComponent;
  let fixture: ComponentFixture<TwoReturnServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoReturnServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoReturnServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
