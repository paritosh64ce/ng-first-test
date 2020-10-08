import { TestBed } from '@angular/core/testing';
import { MyHttpService } from '../shared/my-http.service';

import { MyMathHttpService } from './my-math-http.service';

// #region mocked classes

// #endregion

describe('MyMathHttpService', () => {
  let service: MyMathHttpService;
  const mockedMyHttpService = jasmine.createSpyObj('MyHttpService', ['get', 'post']);

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
});
