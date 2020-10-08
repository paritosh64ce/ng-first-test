import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMathComponent } from './my-math.component';

describe('MyMathComponent', () => {
  let component: MyMathComponent;
  let fixture: ComponentFixture<MyMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
