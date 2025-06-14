import { Component, OnInit } from '@angular/core';
import { MoviewService } from '../services/moview.service';

@Component({
  selector: 'app-management-movie',
  templateUrl: './management-movie.page.html',
  styleUrls: ['./management-movie.page.scss'],
  standalone: false,
})
export class ManagementMoviePage implements OnInit {
  movies: any[] = [];

  constructor(private moviewService: MoviewService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.moviewService.getMovies().subscribe(
      (res) => {
        if (res.result === 'success') {
          this.movies = res.data;
        } else {
          console.error('Failed to fetch movies:', res.message);
        }
      },
      (err) => {
        console.error('Error fetching movies:', err);
      }
    );
  }

  deleteMovie(id: number) {
    this.moviewService.deleteMovie(id).subscribe(
      (res) => {
        if (res.result === 'success') {
          this.movies = this.movies.filter(m => m.id !== id);
        } else {
          alert('Gagal menghapus film: ' + res.message);
        }
      },
      (err) => {
        console.error('Gagal menghapus film:', err);
        alert('Terjadi kesalahan saat menghapus film.');
      }
    );
  }
}
