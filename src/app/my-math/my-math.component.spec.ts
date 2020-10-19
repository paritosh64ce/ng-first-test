import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerService } from '../shared/logger.service';

import { MyMathComponent } from './my-math.component';

describe('MyMathComponent', () => {
  let component: MyMathComponent;
  let fixture: ComponentFixture<MyMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMathComponent ],
      providers: [ LoggerService ]
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

  it('should add two values', () => {
    component.a = 5;
    component.b = 7;

    component.add();

    expect(component.result).toBe(12);
  });

  it('should divide two numbers - positive scenario', () => {
    component.a = 12;
    component.b = 4;

    component.divide();

    expect(component.result).toBe(3);
  });
  
  it('should divide two numbers - negative scenario', () => {
    const loggerSvc = TestBed.get(LoggerService) as LoggerService;
    spyOn(loggerSvc, 'error');

    component.a = 12;
    component.b = 0;

    component.divide();

    // expect(component.result).toBe(NaN);
    expect(isNaN(component.result)).toBeTruthy();
    expect(loggerSvc.error).toHaveBeenCalled();
  });
});
