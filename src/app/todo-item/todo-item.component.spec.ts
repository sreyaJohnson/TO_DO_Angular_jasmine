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
    spyOn(component.remove, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    const inputText ="Have Lunch"
    component.item = {title:inputText};
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.remove.emit).toHaveBeenCalled();
    expect(component.remove.emit).toHaveBeenCalledWith({title:inputText});
  });
});
