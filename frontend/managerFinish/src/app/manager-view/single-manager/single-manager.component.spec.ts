import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleManagerComponent } from './single-manager.component';

describe('SingleManagerComponent', () => {
  let component: SingleManagerComponent;
  let fixture: ComponentFixture<SingleManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
