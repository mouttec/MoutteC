import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceFormulaComponent } from './choice-formula.component';

describe('ChoiceFormulaComponent', () => {
  let component: ChoiceFormulaComponent;
  let fixture: ComponentFixture<ChoiceFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceFormulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
