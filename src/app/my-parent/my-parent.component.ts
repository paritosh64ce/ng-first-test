import { Component, OnInit, ViewChild } from '@angular/core';
import { MyChildComponent } from '../my-child/my-child.component';

@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.scss']
})
export class MyParentComponent implements OnInit {

  a: number;
  b: number;
  result: number;

  @ViewChild('child') child: MyChildComponent;

  constructor() {
    this.a = 5;
    this.b = 10;
  }

  ngOnInit(): void {
  }

  add() {
    this.result = this.child.add();
  }

  onDivision($event: number) {
    this.result = $event;
  }
}
