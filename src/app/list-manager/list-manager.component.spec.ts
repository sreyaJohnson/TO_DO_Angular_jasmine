import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManagerComponent } from './list-manager.component';

describe('ListManagerComponent', () => {
  let component: ListManagerComponent;
  let fixture: ComponentFixture<ListManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add item correctly when add item method is called', () =>{
    component.todoList.length=1;
    component.addItem("hello");
    fixture.detectChanges();
    expect(component.todoList.length).toEqual(2);
  });
  it('should delete item correctly when delete item method is called', () =>{
    component.todoList.length=1;
    component.removeItem({title:"hello"});
    fixture.detectChanges();
    expect(component.todoList.length).toEqual(0);
  });
});
