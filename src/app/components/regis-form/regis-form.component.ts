import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.scss']
})
export class RegisFormComponent implements OnInit {
  todoForm = this.fb.group({
    item: ['']
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  addTodoItem() {
    console.log(this.todoForm.value);
  }

}
