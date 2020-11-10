import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log a message', () => {
    spyOn(console, 'log');
    service.log('hello world');
    expect(console.log).toHaveBeenCalledWith(['hello world']);
  });

  it('should log an error', () => {
    spyOn(console, 'error');
    service.error('error occured');
    expect(console.error).toHaveBeenCalledWith(['error occured']);
  });
});
