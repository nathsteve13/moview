import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  username: string = '';

  constructor() {
    this.getUsernameFromLocalStorage();
  }

  getUsernameFromLocalStorage() {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedData = JSON.parse(userData);
      this.username = parsedData.username;
    }
  }
}
