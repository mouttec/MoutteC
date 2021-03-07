import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleContractComponent } from './single-contract.component';

describe('SingleContractComponent', () => {
  let component: SingleContractComponent;
  let fixture: ComponentFixture<SingleContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
