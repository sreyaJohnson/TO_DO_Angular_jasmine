import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';
const defaultTodoList = [
  { title: 'Wake up' },
  { title: 'Prayer' },
  { title: 'Exercise' },
  { title: 'Fresh up' },
  { title: 'Cook and Clean' },
  { title: 'Work' }
];
@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: TodoItem[];
  constructor(private storageService: StorageService) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  addItem(item: TodoItem): void {
    //if(this.todoList.indexOf(item.title))
   // this.todoList.find(i=>i.title !==item.title)

   if(this.todoList.indexOf(item)===-1)
   this.todoList.push(item);
   this.saveList();
  }

  updateItem(item: TodoItem, changes: any): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

}
