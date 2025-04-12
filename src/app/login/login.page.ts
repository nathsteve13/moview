import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    const user = {
      username: this.username,
      profilePicture: 'assets/default-profile.jpg',
    };

    localStorage.setItem('user', JSON.stringify(user));

    this.router.navigate(['/home']);
  }
}
