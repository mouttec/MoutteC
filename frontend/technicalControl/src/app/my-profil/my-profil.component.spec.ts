import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilComponent } from './my-profil.component';

describe('MyProfilComponent', () => {
  let component: MyProfilComponent;
  let fixture: ComponentFixture<MyProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
