import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviewService } from '../services/moview.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
  standalone: false,
})
export class MoviePage implements OnInit {
  movie: any;
  casts: any[] = [];
  reviews: any[] = [];
  userReview: string = '';
  userRating: number = 3;
  movieId!: number;

  constructor(
    private route: ActivatedRoute,
    private moviewService: MoviewService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieId = +id;
      this.loadMovieDetail(Number(id));
    }
  }

  loadMovieDetail(id: number) {
    this.moviewService.getMovieDetail(id).subscribe(
      (res) => {
        if (res.result === 'success') {
          this.movie = res.data;
          this.casts = res.casts;
          this.reviews = res.reviews;
        } else {
          console.error('Failed to load movie:', res);
        }
      },
      (err) => {
        console.error('Error while loading movie detail:', err);
      }
    );
  }

  submitReview() {
    const movieId = this.movieId;
    const user = JSON.parse(localStorage.getItem('user')!);
    const name = user.name;

    if (!name) {
      alert('Please log in first to submit a review.');
      return;
    }

    if (!this.userReview.trim()) {
      alert('Please enter a review.');
      return;
    }

    this.moviewService
      .addReview(movieId, name, this.userRating, this.userReview)
      .subscribe(
        (res: any) => {
          if (res.result === 'success') {
            this.userReview = '';
            this.userRating = 3;
            this.loadMovieDetail(movieId); // Refresh data
          } else {
            console.error('Failed to submit review:', res);
            alert('Failed to submit review: ' + res.message);
          }
        },
        (err) => {
          console.error('Failed to submit review:', err);
          alert('Failed to submit review.');
        }
      );
  }
}
