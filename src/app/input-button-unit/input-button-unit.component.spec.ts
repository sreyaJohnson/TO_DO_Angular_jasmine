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
  it('should get the input value', () => {
    spyOn(component,'getInputValue');
    let inputEl = fixture.nativeElement.querySelector('input');
    const eventEl = new KeyboardEvent("keyup",{
      "key": "enter"
  });
    inputEl.dispatchEvent(eventEl);
    fixture.detectChanges();
    expect(component.getInputValue).toHaveBeenCalled();

  });
  it('should submit input value', () => {
    spyOn(component.submit,'emit').and.callThrough();
    let btn =fixture.nativeElement.querySelector('button');
    const clickEvent = new Event('click');
    btn.dispatchEvent(clickEvent);
    fixture.detectChanges();
    expect(component.submit.emit).toHaveBeenCalled();
  });
});
