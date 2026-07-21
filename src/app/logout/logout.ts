import { Component, OnInit } from '@angular/core';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout implements OnInit {
  constructor(private authService: Authentication) {}

  ngOnInit(): void {
    this.authService.logout()
  }
}
