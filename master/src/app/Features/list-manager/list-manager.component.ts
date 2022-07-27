import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/Core/interfaces/todo-item';
import { TodoListService } from 'src/app/Core/services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  template: `
    <div class="todo-app">
      <ul *ngFor="let el of todoList">
        <app-todo-item
          (remove)="removeItem($event)"
          (update)="updateItem($event.item, $event.changes)"
          [item]="el"
        ></app-todo-item>
      </ul>

      <app-input-button-unit
        (submit)="addItems($event)"
      ></app-input-button-unit>
    </div>
  `,
  styleUrls: ['./list-manager.component.css'],
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }

  constructor(private todoListService: TodoListService) {}

  addItems(title: string): void {
    this.todoListService.addItem({ title });
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
  updateItem(item, changes): void {
    this.todoListService.updateItem(item, changes);
  }
}
