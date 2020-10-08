import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.scss']
})
export class MyParentComponent implements OnInit {

  a: number;
  b: number;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAddition($event: number) {
    this.result = $event;
  }

  onDivision($event: number) {
    this.result = $event;
  }
}
