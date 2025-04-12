import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  isLoggedIn = false;
  username: string = '';
  name: string = '';
  password: string = '';
  profilePicture: string | null = null;

  constructor(private router: Router) {
    this.checkLoginStatus();
  }

  // Memeriksa status login dan mengambil data pengguna
  checkLoginStatus() {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedData = JSON.parse(userData);
      this.isLoggedIn = true;
      this.username = parsedData.username;
      this.profilePicture = 'assets/default-profile-picture.jpeg';
    } else {
      this.isLoggedIn = false;
    }
  }

  // Logout dan menghapus data pengguna dari localStorage
  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
