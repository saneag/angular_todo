import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.scss'],
})
export class InputTodoComponent {
  todo: string = '';
  showInputData() {
    console.log(this.todo);
  }
}
