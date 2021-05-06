import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammateComponent } from './teammate.component';

describe('TeammateComponent', () => {
  let component: TeammateComponent;
  let fixture: ComponentFixture<TeammateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
