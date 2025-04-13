import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.page.html',
  styleUrls: ['./edit-movie.page.scss'],
  standalone: false,
})
export class EditMoviePage implements OnInit {
  movie: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movie = {
      id,
      title: 'Inception',
      genre: 'Sci-Fi',
      releaseDate: '2010-07-16',
      poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
      director: 'Christopher Nolan',
      synopsis: 'A thief who steals corporate secrets through dream-sharing technology...',
    };
  }

  updateMovie() {
    console.log('Movie updated:', this.movie);
    this.router.navigate(['/management-movie']);
  }
}
