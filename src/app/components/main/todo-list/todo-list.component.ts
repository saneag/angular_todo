import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../../core/models/todo';
import { BackendRequestService } from '../../../core/services/api/backend-request.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todosList$: Observable<Todo[]>;
  
  constructor(private backendRequestService: BackendRequestService) {
    this.todosList$ = this.backendRequestService.getAllTodos();
  }
}
