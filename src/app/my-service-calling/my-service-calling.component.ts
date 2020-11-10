import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../shared/logger.service';
import { MyMathHttpService } from './my-math-http.service';

@Component({
  selector: 'app-my-service-calling',
  templateUrl: './my-service-calling.component.html',
  styleUrls: ['./my-service-calling.component.scss']
})
export class MyServiceCallingComponent implements OnInit {

  a: number;
  b: number;
  result: number;
  userMessage: string;
  clientCategory = 5;
  readonly successMessage = 'Result updated';
  readonly errorMessage = 'Error occured at server';

  constructor(private myMathService: MyMathHttpService, private logger: LoggerService) { }

  ngOnInit(): void {
  }

  add(a: number, b: number) {
    this.myMathService.add(a, b).subscribe((response: number) => {
      this.result = response;
      this.userMessage = this.successMessage;
    }, this.errorHandler);
  }

  divide(a: number, b: number) {
    this.myMathService.divide(a, b).subscribe((response: number) => {
      this.result = response;
    }, this.errorHandler);
  }

  performComplexOperation(a: number, b: number) {
    this.myMathService.calculateInterestRate(a, this.clientCategory).subscribe(result => {
      this.myMathService.calculateTotalInterest(a, b, result).subscribe(interestAmount => {
        this.result = interestAmount;
      }, this.errorHandler);
    }, this.errorHandler);
  }

  private errorHandler = (error) => {
    this.result = NaN;
    this.userMessage = this.errorMessage;
    this.logger.error('internal server error');
  }

}
