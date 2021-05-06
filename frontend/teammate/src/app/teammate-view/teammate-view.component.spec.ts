import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammateViewComponent } from './teammate-view.component';

describe('TeammateViewComponent', () => {
  let component: TeammateViewComponent;
  let fixture: ComponentFixture<TeammateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
