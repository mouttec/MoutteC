import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTeammateComponent } from './single-teammate.component';

describe('SingleTeammateComponent', () => {
  let component: SingleTeammateComponent;
  let fixture: ComponentFixture<SingleTeammateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTeammateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTeammateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
