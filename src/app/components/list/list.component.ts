import { DeleteItemAction } from "./../../store/actions/todo.action";
import { TodoState } from "./../../store/models/todo-state.model";
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/store/models/todo-item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todoItems$: Observable<Array<TodoItem>> | undefined;

  constructor(
    private store: Store<TodoState>,
  ) { }

  ngOnInit(): void {
    this.getListTodoItems();
  }

  getListTodoItems() {
    this.todoItems$ = this.store.select(store => store.todo);
  }

  deleteListItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

}
