import { Component, OnInit } from '@angular/core';
import { MoviewService } from '../services/moview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private moviewService: MoviewService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    if (!this.email || !this.password) {
      alert('Silakan isi email dan password');
      return;
    }

    this.moviewService.login(this.email, this.password).subscribe((result) => {
      if (result.status === 'success') {
        localStorage.setItem('user', JSON.stringify(result.user));
        alert('Login berhasil!');
        this.router.navigate(['/home']);
      } else {
        alert('Login gagal: ' + result.message);
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
