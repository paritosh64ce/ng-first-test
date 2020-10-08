import { TestBed } from '@angular/core/testing';

import { MyMathHttpService } from './my-math-http.service';

describe('MyMathHttpService', () => {
  let service: MyMathHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyMathHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
