import { Component, OnInit } from '@angular/core';
import { MoviewService } from '../services/moview.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false,
})
export class SearchPage implements OnInit {
  searchQuery = '';
  movies: any[] = [];
  filteredMovies: any[] = [];

  constructor(private moviewService: MoviewService) {}

  ngOnInit() {
    this.moviewService.getMovies().subscribe(
      (res) => {
        if (res.result === 'success') {
          this.movies = res.data;
          this.filteredMovies = [...this.movies];
        } else {
          console.error('Failed to load movies:', res.message);
        }
      },
      (err) => {
        console.error('Error fetching movies:', err);
      }
    );
  }

  filterMovies() {
    const query = this.searchQuery.toLowerCase();
    this.filteredMovies = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(query) ||
      movie.genre.toLowerCase().includes(query)
    );
  }
}
