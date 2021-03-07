import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingninComponent } from './singnin.component';

describe('SingninComponent', () => {
  let component: SingninComponent;
  let fixture: ComponentFixture<SingninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
