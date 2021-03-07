import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnReturnServiceComponent } from './on-return-service.component';

describe('OnReturnServiceComponent', () => {
  let component: OnReturnServiceComponent;
  let fixture: ComponentFixture<OnReturnServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnReturnServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnReturnServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
