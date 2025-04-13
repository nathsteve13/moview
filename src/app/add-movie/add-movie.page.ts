import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
  standalone: false,
})
export class AddMoviePage {
  movie = {
    title: '',
    genre: '',
    releaseDate: '',
    poster: '',
    director: '',
    synopsis: '',
  };

  constructor(private router: Router) {}

  saveMovie() {
    console.log('Saved:', this.movie);
    this.router.navigate(['/management-movie']);
  }
}
