import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MyHttpService } from './my-http.service';

describe('MyHttpService', () => {

  let service: MyHttpService;
  const mockedHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: mockedHttpClient }
      ]
    });
    service = TestBed.inject(MyHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
