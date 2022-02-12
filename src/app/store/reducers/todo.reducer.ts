import { TodoAction } from "./../actions/todo.action";
import { TodoItem } from '../models/todo-item.model';
import { TodoActionTypes } from '../models/todo-action-types.enum';

const initialState: Array<TodoItem> = [];

export function TodoReducer(
  state: Array<TodoItem> = initialState,
  action: TodoAction,
) {

  switch (action.type) {
    case TodoActionTypes.ADD_ITEM:
      return [...state, action.payload]

    default:
      return state;
  }

}