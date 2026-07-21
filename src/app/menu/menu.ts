import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Authentication } from '../services/authentication';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {

  isUserLoggedIn: boolean = false

  constructor(private authService: Authentication)  {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
    console.log('User LoggedIn? == ' + this.isUserLoggedIn)
  }
  
  
}
