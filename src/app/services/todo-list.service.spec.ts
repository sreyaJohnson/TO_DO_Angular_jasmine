import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

import { TodoListService } from './todo-list.service';

describe('TodoListService', () => {
  let service: TodoListService;
  let storageService : StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [StorageService
  ]});
    service = TestBed.inject(TodoListService);
    storageService = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should save the list', () => {
    let todoListStorageKey = 'Todo_List';
    let val = [{title:"write"},{title:"read"}];
    service.todoList = val;
    spyOn(storageService,'setData').withArgs(todoListStorageKey,val);
    service.saveList();
    expect(storageService.setData).toHaveBeenCalledWith(todoListStorageKey,val);

  });
  it('should update the todo list', () =>{
    let val = {title:"write"};
    let saveListSpy= spyOn(service,'saveList');
    service.todoList.length=6;
    service.addItem(val);
    expect(service.todoList.length).toEqual(7);
    expect(saveListSpy).toHaveBeenCalled();
  });
  it('should delete the todo list', () =>{
    let val = {title:"write"};
    let saveListSpy= spyOn(service,'saveList');
    service.todoList.length=5;
    service.deleteItem(val);
    expect(service.todoList.length).toEqual(4);
    expect(saveListSpy).toHaveBeenCalled();
  });
  it('should get the todo list', () =>{
    let val = [{title:"write"},{title:"read"}];
    service.todoList = val;
    expect(service.getTodoList()).toEqual(val);
  });
});
