import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  name: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  profilePicture: string | ArrayBuffer | null = null;

  constructor(private router: Router) {}

  formIsValid() {
    return (
      this.name &&
      this.username &&
      this.password &&
      this.password === this.confirmPassword
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  register() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const user = {
      name: this.name,
      username: this.username,
      password: this.password,
      profilePicture: this.profilePicture || 'assets/default-profile-picture.jpeg',
    };

    localStorage.setItem('user', JSON.stringify(user));

    this.router.navigate(['/login']);
  }
}
