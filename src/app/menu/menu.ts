import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {

  isUserLoggedIn: boolean = false

  constructor(private authService: Authentication)  {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
  }
  
  
}
