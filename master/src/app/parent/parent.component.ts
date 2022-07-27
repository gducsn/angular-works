import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  words = 'hello';
  change() {
    this.words = 'new words';
  }

  constructor() {}

  ngOnInit(): void {}
}
