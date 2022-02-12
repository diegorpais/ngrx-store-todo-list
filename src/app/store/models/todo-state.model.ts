import { TodoItem } from './todo-item.model';

export interface TodoState {
  readonly todo: Array<TodoItem>;
}