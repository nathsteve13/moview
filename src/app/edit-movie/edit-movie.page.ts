import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviewService } from '../services/moview.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.page.html',
  styleUrls: ['./edit-movie.page.scss'],
  standalone: false,
})
export class EditMoviePage implements OnInit {
  movie: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviewService: MoviewService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.moviewService.getMovieDetail(id).subscribe(
      (res) => {
        if (res.result === 'success') {
          this.movie = res.data;
        } else {
          alert('Failed to load movie data.');
        }
      },
      (err) => {
        console.error('Error fetching movie:', err);
      }
    );
  }

  updateMovie() {
    const dataToSend = {
      ...this.movie,
      release_date: this.movie.releaseDate,
    };

    this.moviewService.updateMovie(dataToSend).subscribe(
      (res) => {
        if (res.result === 'success') {
          alert('Movie updated successfully!');
          this.router.navigate(['/management-movie']);
        } else {
          alert('Failed to update movie.');
        }
      },
      (err) => {
        console.error('Error updating movie:', err);
        alert('Error occurred while updating.');
      }
    );
  }
}
