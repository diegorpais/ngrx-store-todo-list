import { Action } from '@ngrx/store';
import { TodoActionTypes } from '../models/todo-action-types.enum';
import { TodoItem } from '../models/todo-item.model';

export class AddItemAction implements Action {
  readonly type = TodoActionTypes.ADD_ITEM;
  constructor(public payload: TodoItem) { }
}

export class DeleteItemAction implements Action {
  readonly type = TodoActionTypes.DELETE_ITEM;
  constructor(public payload: string) { }
}

export type TodoAction = AddItemAction | DeleteItemAction | any;