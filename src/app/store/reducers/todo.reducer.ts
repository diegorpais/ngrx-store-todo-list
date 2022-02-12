import { TodoAction } from "./../actions/todo.action";
import { TodoItem } from '../models/todo-item.model';
import { TodoActionTypes } from '../models/todo-action-types.enum';

const todoItems = getLocalStorage('todoList');
const initialState: Array<TodoItem> = todoItems ? todoItems : [];

export function TodoReducer(
  state: Array<TodoItem> = initialState,
  action: TodoAction,
) {

  switch (action.type) {
    case TodoActionTypes.ADD_ITEM:
      const todoData = [...state, action.payload];
      setLocalStorage('todoList', todoData);
      return todoData;

    case TodoActionTypes.DELETE_ITEM:
      const deletedData = state.filter(item => item.id !== action.payload);
      setLocalStorage('todoList', deletedData);
      return deletedData;

    default:
      return state;
  }

}

function getLocalStorage(key: string) {
  const storageData = localStorage.getItem(key);
  if (!storageData) {
    return;
  }
  return JSON.parse(storageData);
}

function setLocalStorage(key: string, value: any) {
  const storageData = JSON.stringify(value);
  localStorage.setItem(key, storageData);
}