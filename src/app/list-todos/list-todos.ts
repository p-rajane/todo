import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

export class Todo {
 constructor(
  public id: number,
  public description: string,
  public done: boolean,
  public targetDate: Date
 ) {}
}

@Component({
  selector: 'app-list-todos',
  imports: [DatePipe],
  templateUrl: './list-todos.html',
  styleUrl: './list-todos.css',
})



export class ListTodos {
  
  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'Learn to walk', false, new Date()),
    new Todo(3, 'Learn to run', false, new Date()),
    new Todo(4, 'Learn to stand', false, new Date())
  ]

  constructor() {

  }
 
}
