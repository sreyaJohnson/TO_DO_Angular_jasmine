import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
  <div id="itemName" class="col-12 col-md-12 bg-warning d-flex 
  justify-content-center align-items-center h5">
  {{ item.title }}
  <div class="col-1"></div>
  <button class="btn btn-light" (click)="removeItem()">
    remove
  </button>
</div>
  `,
  styleUrls: ['./todo-item.component.scss'],
  standalone: true
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem ={title:""};
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }
  removeItem(): void {
    this.remove.emit(this.item);
  }

}