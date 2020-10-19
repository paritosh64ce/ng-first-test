import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../shared/logger.service';

@Component({
  selector: 'app-my-math',
  templateUrl: './my-math.component.html',
  styleUrls: ['./my-math.component.scss']
})
export class MyMathComponent implements OnInit {

  a: number;
  b: number;
  result: number;

  constructor(private logger: LoggerService) {
    this.a = 0;
    this.b = 0;
    this.result = 0;
  }

  ngOnInit(): void {
  }

  add () {
    this.result = this.a + this.b;
  }

  divide () {
    if (this.b === 0) {
      this.logger.error('Divide by zero');
      this.result = NaN;
      return;
    }
    this.result = this.a / this.b;
  }

}
