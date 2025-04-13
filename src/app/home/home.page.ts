import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  isLoggedIn = true; 
  username = 'Nathan';

  latestMovies = [
    {
      id: 1,
      title: 'The Batman',
      genre: 'Action',
      releaseDate: '2022-03-04',
      rating: 4.5,
      poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    },
    {
      id: 2,
      title: 'Dune',
      genre: 'Sci-Fi',
      releaseDate: '2021-10-22',
      rating: 4.2,
      poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    },
    {
      id: 3,
      title: 'Spider-Man: No Way Home',
      genre: 'Action',
      releaseDate: '2021-12-17',
      rating: 4.8,
      poster: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    },
    {
      id: 4,
      title: 'Encanto',
      genre: 'Animation',
      releaseDate: '2021-11-24',
      rating: 4.7,
      poster: 'https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
    },
    {
      id: 5,
      title: 'No Time to Die',
      genre: 'Action',
      releaseDate: '2021-10-08',
      rating: 4.3,
      poster: 'https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg',
    },
    {
      id: 6,
      title: 'Eternals',
      genre: 'Action',
      releaseDate: '2021-11-05',
      rating: 4.1,
      poster: 'https://image.tmdb.org/t/p/w500/b6qUu00iIIkXX13szFy7d0CyNcg.jpg',
    },
    {
      id: 7,
      title: 'Shang-Chi and the Legend of the Ten Rings',
      genre: 'Action',
      releaseDate: '2021-09-03',
      rating: 4.6,
      poster: 'https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
    },
    {
      id: 8,
      title: 'Black Widow',
      genre: 'Action',
      releaseDate: '2021-07-09',
      rating: 4.0,
      poster: 'https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
    },
    {
      id: 9,
      title: 'Free Guy',
      genre: 'Comedy',
      releaseDate: '2021-08-13',
      rating: 4.4,
      poster: 'https://image.tmdb.org/t/p/w500/acCS12FVUQ7blkC8qEbuXbsWEs2.jpg',
    },
    {
      id: 10,
      title: 'The Suicide Squad',
      genre: 'Action',
      releaseDate: '2021-08-06',
      rating: 4.2,
      poster: 'https://image.tmdb.org/t/p/w500/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg',
    },
  ];
}
