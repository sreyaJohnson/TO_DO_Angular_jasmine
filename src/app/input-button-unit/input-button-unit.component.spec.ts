import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonUnitComponent } from './input-button-unit.component';

describe('InputButtonUnitComponent', () => {
  let component: InputButtonUnitComponent;
  let fixture: ComponentFixture<InputButtonUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputButtonUnitComponent]
    })
    .compileComponents();  
    fixture = TestBed.createComponent(InputButtonUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should submit input value', () => {
    let btn =document.querySelector('button');
    btn?.click();
    spyOn(component.submit,'emit').and.callThrough();
    let event = new MouseEvent('click'); 
  //  event.target="hey";
   // const newTask = component.getInputValue(event);
    expect(component.submit.emit).toHaveBeenCalled();
  });
});
