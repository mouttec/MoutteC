import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeammateComponent } from './update-teammate.component';

describe('UpdateTeammateComponent', () => {
  let component: UpdateTeammateComponent;
  let fixture: ComponentFixture<UpdateTeammateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTeammateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeammateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
