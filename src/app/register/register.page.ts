import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviewService } from '../services/moview.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  phone: string = '';
  selectedFile: File | null = null;
  selectedImage: any = null;

  constructor(
    private router: Router,
    private moviewService: MoviewService
  ) {}

  ngOnInit() {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  register() {
    if (
      !this.name ||
      !this.email ||
      !this.password ||
      !this.confirmPassword ||
      !this.phone ||
      !this.selectedFile
    ) {
      alert('Please fill all fields and upload a photo!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.moviewService
      .register(this.name, this.email, this.password, this.phone, this.selectedFile)
      .subscribe(
        (result: any) => {
          if (result.status === 'success') {
            alert('Registration successful!');
            this.router.navigate(['/login']);
          } else {
            alert('Registration failed: ' + result.message);
          }
        },
        (error) => {
          console.error('Error:', error);
          alert('An error occurred during registration.');
        }
      );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
