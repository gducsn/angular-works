import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="todo-input" placeholder="add items" #el />
    <button class="btn" (click)="submitValue(el.value)">Save!</button>
  `,
  styleUrls: ['./input-button-unit.component.css'],
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

  constructor() {}

  ngOnInit(): void {}
}
