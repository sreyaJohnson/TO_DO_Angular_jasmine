import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListManagerComponent } from './list-manager/list-manager.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent,FormsModule, CommonModule, ListManagerComponent]
      
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'My Daily journal' title`, () => {
    expect(component.title).toEqual('My Daily journal');
  });

  // it('should render App Heading', () => {
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.h2')?.textContent).toMatch(' My Daily Journal! ');
  // });
  // it('should add the task to the todo List when a new task is entered', () => {
  //   component.addToList();
  //   fixture.detectChanges();
  //   component.newTask ="Walk at 5am";
  //   expect(component.items.length).toBeGreaterThan(0);
  // });
});
