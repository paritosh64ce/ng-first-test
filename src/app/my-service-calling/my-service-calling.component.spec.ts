import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { LoggerService } from '../shared/logger.service';
import { MyMathHttpService } from './my-math-http.service';
import { MyServiceCallingComponent } from './my-service-calling.component';

// #region mocked classes

class MockedMathHttpService {
  add() {}
  divide() {}
  calculateInterestRate() {}
  calculateTotalInterest() {}
}

class MockLoggerService {
  error() {}
}

// #endregion


describe('MyServiceCallingComponent', () => {
  let component: MyServiceCallingComponent;
  let fixture: ComponentFixture<MyServiceCallingComponent>;
  let mockMathSvc: MyMathHttpService;
  let loggerSvc: LoggerService;

  // why async? - https://v9.angular.io/guide/testing#the-async-beforeeach
  // more: https://stackoverflow.com/questions/40126729/angular-2-testing-async-function-call-when-to-use
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServiceCallingComponent ],
      providers: [
        { provide: MyMathHttpService, useClass: MockedMathHttpService },
        { provide: LoggerService, useClass: MockLoggerService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceCallingComponent);
    component = fixture.componentInstance;
    mockMathSvc = TestBed.get(MyMathHttpService);
    loggerSvc = TestBed.get(LoggerService);
    spyOn(loggerSvc, 'error');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call mathSvc to add variables', () => {
    const a = 5;
    const b = 7;
    const fakeResult = 12;
    spyOn(mockMathSvc, 'add').and.returnValue(of(fakeResult));

    component.add(a, b);
    fixture.detectChanges();

    expect(mockMathSvc.add).toHaveBeenCalledWith(a, b);
    expect(component.result).toBe(fakeResult);
    expect(loggerSvc.error).not.toHaveBeenCalled();
  });

  it('should call mathSvc to add variables - error scenario', () => {
    const a = 5;
    const b = 7;
    const fakeResult = 12;
    spyOn(mockMathSvc, 'add').and.callFake(() => {
      return throwError(new Error('error'));
    });

    component.add(a, b);
    fixture.detectChanges();

    expect(mockMathSvc.add).toHaveBeenCalledWith(a, b);
    expect(isNaN(component.result)).toBe(true);
    // expect(component.result).toBe(NaN); - won't work, coz in JavaScript, NaN != NaN
    expect(loggerSvc.error).toHaveBeenCalled();
    expect(component.userMessage).toBe(component.errorMessage);
  });

  it('should call mathSvc to divide variables', () => {
    const a = 45;
    const b = 9;
    const fakeResult = 5;
    spyOn(mockMathSvc, 'divide').and.returnValue(of(fakeResult));

    component.divide(a, b);
    fixture.detectChanges();

    expect(mockMathSvc.divide).toHaveBeenCalledWith(a, b);
    expect(component.result).toBe(fakeResult);
    expect(loggerSvc.error).not.toHaveBeenCalled();
  });

  describe('complex operation', () => {

    const interestRate = 9;
    const totalInterest = 5000;
    beforeEach(() => {
      spyOn(mockMathSvc, 'calculateInterestRate').and.returnValue(of(interestRate));
    });

    it('should perform complex operation', () => {
      spyOn(mockMathSvc, 'calculateTotalInterest').and.returnValue(of(totalInterest));

      const premium = 5000;
      const durationMonth = 10;
      component.performComplexOperation(premium, durationMonth);
      fixture.detectChanges();

      expect(mockMathSvc.calculateInterestRate).toHaveBeenCalledWith(premium, component.clientCategory);
      expect(mockMathSvc.calculateTotalInterest).toHaveBeenCalledWith(premium, durationMonth, interestRate);
      expect(component.result).toBe(totalInterest);
    });

    it('should perform complex operation - error scenario', () => {
      spyOn(mockMathSvc, 'calculateTotalInterest').and.callFake(() => {
        return throwError(new Error('error occured'));
      });

      const premium = 5000;
      const durationMonth = 10;
      component.performComplexOperation(premium, durationMonth);
      fixture.detectChanges();

      expect(mockMathSvc.calculateInterestRate).toHaveBeenCalledWith(premium, component.clientCategory);
      expect(mockMathSvc.calculateTotalInterest).toHaveBeenCalledWith(premium, durationMonth, interestRate);
      expect(isNaN(component.result)).toBeTruthy();
      expect(component.userMessage).toBe(component.errorMessage);
      expect(loggerSvc.error).toHaveBeenCalled();
    });

  });

});
