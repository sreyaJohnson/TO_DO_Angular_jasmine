import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <div class="col-6 col-md-6"></div>
  <div class="col-6 col-md-6 bg-info d-flex 
  justify-content-center align-items-center 
  text-light h6">

  TO DO TASKS
  <div class="col-1"></div>    
  <input #inputElementRef
         [value]="title"
         (keyup.enter)="submitValue(getInputValue($event))" >
         <div class="col-1"></div>     
  <button (click)="submitValue(inputElementRef.value)" class="btn btn-light text-success">
   ADD TASK
  </button>
  </div>
`,
  styleUrls: ['./input-button-unit.component.scss'],
  standalone: true
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hey';
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
  submitValue(newTask: string) {
    if(newTask){
      this.submit.emit(newTask);
    }
   
  }
}