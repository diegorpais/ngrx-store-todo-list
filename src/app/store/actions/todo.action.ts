import { Action } from '@ngrx/store';
import { TodoActionTypes } from '../models/todo-action-types.enum';
import { TodoItem } from '../models/todo-item.model';

export class AddItemAction implements Action {
  readonly type = TodoActionTypes.ADD_ITEM;
  constructor(public payload: TodoItem) { }
}

export type TodoAction = AddItemAction | any;