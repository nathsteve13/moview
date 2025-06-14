import { Component, OnInit } from '@angular/core';
import { MoviewService } from '../services/moview.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  latestMovies: any[] = [];
  isLoading = true;
  errorMsg = '';


  constructor(private moviewService: MoviewService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.moviewService.getMovies().subscribe({
      next: (res) => {
        this.latestMovies =
          res.data
            ?.sort(
              (a: any, b: any) =>
                new Date(b.release_date).getTime() -
                new Date(a.release_date).getTime()
            )
            .slice(0, 10) || [];

        this.isLoading = false;
      },
      error: (err) => {
        this.errorMsg = 'Gagal memuat data film.';
        this.isLoading = false;
        console.error(err);
      },
    });
  }
}
