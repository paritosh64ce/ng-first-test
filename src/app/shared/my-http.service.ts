import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpSvc: HttpClient) { }

  get(url: string, headers?: any): Observable<any> {
    return this.httpSvc.get(url, headers);
  }

  post(url: string, payload: any, headers?: any): Observable<any> {
    return this.httpSvc.post(url, payload, headers);
  }
}
