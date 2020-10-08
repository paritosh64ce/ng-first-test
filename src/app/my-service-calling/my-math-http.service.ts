import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyHttpService } from '../shared/my-http.service';

@Injectable({
  providedIn: 'root'
})
export class MyMathHttpService {

  constructor(private myHttp: MyHttpService) { }

  add(a: number, b: number): Observable<number> {
    const payload = { a: a, b: b };
    return this.myHttp.post('addServiceUrl', payload);
  }
  
  divide(a: number, b: number): Observable<number> {
    const payload = { a: a, b: b };
    return this.myHttp.post('divideServiceUrl', payload);
  }
}
