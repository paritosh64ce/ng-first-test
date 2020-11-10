import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParentComponent } from './my-parent.component';

// #region Mocked classes

@Component({
  selector: 'app-my-child'
})
class MyFakeChildComponent {
  @Input() a: number;
  @Input() b: number;
  add() {}
}

// #endregion

describe('MyParentComponent', () => {
  let component: MyParentComponent;
  let fixture: ComponentFixture<MyParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyParentComponent, MyFakeChildComponent ]
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

  it('should handle add', () => {
    const fakeResult = 5;
    spyOn(component.child, 'add').and.returnValue(fakeResult);
    component.add();

    expect(component.result).toBe(fakeResult);
  });

  it('should handle onDivision', () => {
    const fakeResult = 5;
    component.onDivision(fakeResult);

    expect(component.result).toBe(fakeResult);
  });

});
