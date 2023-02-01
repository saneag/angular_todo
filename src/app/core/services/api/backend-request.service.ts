import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../../models/todo';

@Injectable({
  providedIn: 'root',
})
export class BackendRequestService {
  constructor(private http: HttpClient) {}

  protected URL: string = 'https://62a36f1d21232ff9b21fe3d5.mockapi.io/';

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL + 'todos');
  }
}
