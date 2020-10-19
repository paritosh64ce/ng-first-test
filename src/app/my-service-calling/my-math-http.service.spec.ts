import { TestBed } from '@angular/core/testing';
import { MyHttpService } from '../shared/my-http.service';

import { MyMathHttpService } from './my-math-http.service';

// #region mocked classes

const mockedMyHttpService = jasmine.createSpyObj('MyHttpService', ['get', 'post']);

// #endregion

describe('MyMathHttpService', () => {
  let service: MyMathHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MyHttpService, useValue: mockedMyHttpService }
      ]
    });
    service = TestBed.inject(MyMathHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should call server add method', () => {
    service.add(2, 3);
    expect(mockedMyHttpService.post).toHaveBeenCalled();

    const args = (mockedMyHttpService.post as  jasmine.Spy).calls.mostRecent().args;
    expect(args[0]).toBe('addServiceUrl');
    expect(args[1].a).toBe(2);
    expect(args[1].b).toBe(3);
  });
  
  it('should call server divide method', () => {
    service.divide(2, 3);
    expect(mockedMyHttpService.post).toHaveBeenCalled();

    const args = (mockedMyHttpService.post as  jasmine.Spy).calls.mostRecent().args;
    expect(args[0]).toBe('divideServiceUrl');
    expect(args[1].a).toBe(2);
    expect(args[1].b).toBe(3);
  });
  
  it('should call server to calculate interetRate', () => {
    const amount = 20000;
    const clientType = 1;
    service.calculateInterestRate(amount, clientType);
    expect(mockedMyHttpService.post).toHaveBeenCalled();

    const args = (mockedMyHttpService.post as  jasmine.Spy).calls.mostRecent().args;
    expect(args[0]).toBe('interetRateUrl');
    expect(args[1].premium).toBe(amount);
    expect(args[1].clientCategory).toBe(clientType);
  });
  
  it('should call server to calculate TotalInterest', () => {
    const amount = 20000;
    const months = 10;
    const roi = 11;
    service.calculateTotalInterest(amount, months, roi);
    expect(mockedMyHttpService.post).toHaveBeenCalled();

    const args = (mockedMyHttpService.post as  jasmine.Spy).calls.mostRecent().args;
    expect(args[0]).toBe('interestUrl');
    expect(args[1].premium).toBe(amount);
    expect(args[1].durationInMonths).toBe(months);
    expect(args[1].roi).toBe(roi);
  });
});
