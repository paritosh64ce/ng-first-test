import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceCallingComponent } from './my-service-calling.component';

describe('MyServiceCallingComponent', () => {
  let component: MyServiceCallingComponent;
  let fixture: ComponentFixture<MyServiceCallingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServiceCallingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceCallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
