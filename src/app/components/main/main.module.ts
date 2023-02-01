import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTodoComponent } from './input-todo/input-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoProgressComponent } from './todo-progress/todo-progress.component';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  InputTodoComponent,
  TodoProgressComponent,
  TodoListComponent,
  MainComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule],
  exports: [...COMPONENTS],
})
export class MainModule {}
