import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemComponent]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should remove the items properly", () => {
    const removeItemSpy=spyOn(component.remove, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    fixture.nativeElement.querySelector("#itemName").value = 'Have lunch';
    const inputText = fixture.nativeElement.querySelector("#itemName").value;
    button.click();
    fixture.detectChanges();
    expect(removeItemSpy).toHaveBeenCalledWith({title:inputText});
  });
});
