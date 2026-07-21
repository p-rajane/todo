import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { Error } from './error/error';
import { ListTodos } from './list-todos/list-todos';
import { CommonModule } from '@angular/common';
import { Menu } from './menu/menu';
import { Logout } from './logout/logout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Login, Error, ListTodos, CommonModule, Menu, Logout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
}
