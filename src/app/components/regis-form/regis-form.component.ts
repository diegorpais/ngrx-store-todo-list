import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { v4 as uuid } from 'uuid';

import { TodoItem } from 'src/app/store/models/todo-item.model';
import { TodoState } from "./../../store/models/todo-state.model";
import { AddItemAction } from "./../../store/actions/todo.action";

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.scss']
})
export class RegisFormComponent implements OnInit {
  todoForm = this.fb.group({
    item: ['']
  });

  newTodoItem: TodoItem = { id: '', item: '' };

  constructor(
    private fb: FormBuilder,
    private store: Store<TodoState>
  ) { }

  ngOnInit(): void {
  }

  addTodoItem() {
    this.newTodoItem.id = uuid();
    this.newTodoItem.item = this.todoForm.get('item')?.value;

    this.store.dispatch(new AddItemAction(this.newTodoItem));

    this.newTodoItem = { id: '', item: '' };
    this.todoForm.get('item')?.setValue('');
  }

}
