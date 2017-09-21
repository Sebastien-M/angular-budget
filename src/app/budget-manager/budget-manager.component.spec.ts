import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetManagerComponent } from './budget-manager.component';

describe('BudgetManagerComponent', () => {
  let component: BudgetManagerComponent;
  let fixture: ComponentFixture<BudgetManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
