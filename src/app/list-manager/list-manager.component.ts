import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-list-manager',
  template: `     <div class="col-3"></div>
  <div class="row mt-1 col-12  justify-content-center 
  align-items-center" style="height:80px;">
  <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
  </div>
  <div class="col-6"></div>
 
      <div class="col-3" *ngFor="let todoItem of todoList">
          <app-todo-item [item]="todoItem"
          (remove)="removeItem($event)"></app-todo-item>
      </div>
     
 `,
  styleUrls: ['./list-manager.component.scss'],
  standalone: true,
  imports: [InputButtonUnitComponent, TodoItemComponent, CommonModule]
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [{ title: "" }];

  constructor(private todoListService: TodoListService) {
    todoListService.getTodoList();
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }
  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }
}