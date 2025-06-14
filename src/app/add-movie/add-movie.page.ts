// === src/app/add-movie/add-movie.page.ts ===
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviewService } from '../services/moview.service';

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
    rating: 0,
  };

  casts = [
    { name: '', role: '' }
  ];

  constructor(
    private router: Router,
    private moviewService: MoviewService
  ) {}

  addCastField() {
    this.casts.push({ name: '', role: '' });
  }

  removeCastField(index: number) {
    this.casts.splice(index, 1);
  }

  saveMovie() {
    if (!this.movie.title || !this.movie.genre || !this.movie.releaseDate || !this.movie.rating) {
      alert('Please fill in all required fields');
      return;
    }

    const movieData = {
      title: this.movie.title,
      genre: this.movie.genre,
      release_date: this.movie.releaseDate,
      poster: this.movie.poster,
      director: this.movie.director,
      synopsis: this.movie.synopsis,
      rating: this.movie.rating,
      casts: this.casts.filter(c => c.name && c.role),
    };

    this.moviewService.addMovie(movieData).subscribe(
      (res) => {
        if (res.result === 'success') {
          alert('Movie added successfully!');
          this.router.navigate(['/management-movie']);
        } else {
          alert('Failed to add movie.');
          console.error(res.message);
        }
      },
      (err) => {
        console.error('Error adding movie:', err);
        alert('Error occurred while saving the movie.');
      }
    );
  }
}
