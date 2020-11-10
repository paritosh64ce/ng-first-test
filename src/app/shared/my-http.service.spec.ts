import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MyHttpService } from './my-http.service';

describe('MyHttpService', () => {

  let service: MyHttpService;
  const mockedHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post']);
  const url = 'my-url';
  const payload = {
    my: 'payload'
  };
  const headers = {
    'user-id': 'some-uuid',
    license: 'encrypted-license-key'
  };

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

  it('should call http get', () => {
    service.get(url, headers);

    expect(mockedHttpClient.get).toHaveBeenCalledWith(url, headers);
  });

  it('should call http post', () => {
    service.post(url, payload, headers);

    expect(mockedHttpClient.post).toHaveBeenCalledWith(url, payload, headers);
  });
});
