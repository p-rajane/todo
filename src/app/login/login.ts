import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';
@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = 'Pramod'
  password = 'Pramod'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router,
    private authService: Authentication
  ) {

  }

  handleLogin() {
    if(this.authService.authenticate(this.username, this.password)) {
      sessionStorage.setItem('authenticatedUser', this.username)
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
