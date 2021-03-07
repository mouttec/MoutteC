import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVideoComponent } from './single-video.component';

describe('SingleVideoComponent', () => {
  let component: SingleVideoComponent;
  let fixture: ComponentFixture<SingleVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
