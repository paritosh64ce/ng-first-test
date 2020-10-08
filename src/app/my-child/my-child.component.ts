import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.scss']
})
export class MyChildComponent implements OnInit {

  @Input() a: number;
  @Input() b: number;

  @Output() addition = new EventEmitter<number>();
  @Output() division = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    const result = this.a + this.b;
    // let's assume child has to wait for something and then emits the event
    // just to understand how we test such scenario with tick and fakeAsync
    setTimeout(() => {
      this.addition.emit(result);
    });
  }

  divide() {
    const result = this.a / this.b;
    // let's assume child has to wait for something and then emits the event
    // just to understand how we test such scenario with tick and fakeAsync
    setTimeout(() => {
      this.division.emit(result);
    });
  }

}
