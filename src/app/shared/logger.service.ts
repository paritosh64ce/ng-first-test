import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  error(...error) {
    console.error(error);
  }

  log(...msg) {
    console.log(msg);
  }
}
