import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParentComponent } from './my-parent.component';

// #region Mocked classes

@Component({
  selector: 'app-my-child'
})
class MyFakeChild {
  @Input() a: number;
  @Input() b: number;
}

// #endregion

describe('MyParentComponent', () => {
  let component: MyParentComponent;
  let fixture: ComponentFixture<MyParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyParentComponent, MyFakeChild ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle onAddition', () => {
    const fakeResult = 5;
    component.onAddition(fakeResult);

    expect(component.result).toBe(fakeResult);
  });
  
  it('should handle onDivision', () => {
    const fakeResult = 5;
    component.onDivision(fakeResult);

    expect(component.result).toBe(fakeResult);
  });

});
