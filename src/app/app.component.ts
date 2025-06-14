import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkLogin();
  }

  ionViewWillEnter() {
    this.checkLogin();
  }

  checkLogin() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.isLoggedIn = true;
      this.username = parsedUser.name;
    } else {
      this.isLoggedIn = false;
      this.username = '';
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.username = '';
    this.router.navigate(['/login']);
  }
}
