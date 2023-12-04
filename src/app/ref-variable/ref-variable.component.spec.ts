import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefVariableComponent } from './ref-variable.component';

describe('RefVariableComponent', () => {
  let component: RefVariableComponent;
  let fixture: ComponentFixture<RefVariableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefVariableComponent]
    });
    fixture = TestBed.createComponent(RefVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
