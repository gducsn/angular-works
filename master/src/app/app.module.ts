import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './Features/input-button-unit/input-button-unit.component';

import { ListManagerComponent } from './Features/list-manager/list-manager.component';
import { TodoItemComponent } from './Features/todo-item/todo-item.component';
import { StorageService } from './Core/services/storage.service';
import { TodoListService } from './Core/services/todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
  ],
  imports: [BrowserModule],
  providers: [TodoListService, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
