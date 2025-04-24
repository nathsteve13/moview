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

  movies = [
    {
      id: 1,
      title: 'The Batman',
      genre: 'Action',
      releaseDate: '2022-03-04',
      rating: 4.5,
      director: 'Matt Reeves',
      poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
      synopsis: 'Batman returns to fight crime in Gotham against new enemies.',
      cast: [
        { name: 'Robert Pattinson', role: 'Bruce Wayne / Batman' },
        { name: 'Zoë Kravitz', role: 'Selina Kyle / Catwoman' },
        { name: 'Paul Dano', role: 'The Riddler' },
      ],
      reviews: [
        { name: 'John Doe', date: '2025-04-12', rating: 5, comment: 'Amazing movie! The cinematography was stunning.' },
        { name: 'Alice', date: '2025-04-11', rating: 4, comment: 'Dark, stylish, and well-acted.' },
        { name: 'Bob', date: '2025-04-10', rating: 4.5, comment: 'A fresh take on the Batman franchise.' },
        { name: 'Eve', date: '2025-04-09', rating: 5, comment: 'Incredible performances by the cast.' },
        { name: 'Charlie', date: '2025-04-08', rating: 4, comment: 'Loved the action sequences.' },
      ],
    },
    {
      id: 2,
      title: 'Inception',
      genre: 'Sci-Fi',
      releaseDate: '2010-07-16',
      rating: 4.8,
      director: 'Christopher Nolan',
      poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
      synopsis: 'A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his past.',
      cast: [
        { name: 'Leonardo DiCaprio', role: 'Dom Cobb' },
        { name: 'Joseph Gordon-Levitt', role: 'Arthur' },
        { name: 'Elliot Page', role: 'Ariadne' },
      ],
      reviews: [
        { name: 'Sophia', date: '2025-04-12', rating: 5, comment: 'Mind-bending and visually stunning.' },
        { name: 'Liam', date: '2025-04-11', rating: 4.5, comment: 'A masterpiece of storytelling.' },
        { name: 'Olivia', date: '2025-04-10', rating: 5, comment: 'Nolan at his best.' },
        { name: 'Noah', date: '2025-04-09', rating: 4.8, comment: 'A movie that keeps you thinking.' },
        { name: 'Emma', date: '2025-04-08', rating: 4.7, comment: 'Brilliantly executed.' },
      ],
    },
    {
      id: 3,
      title: 'Interstellar',
      genre: 'Sci-Fi',
      releaseDate: '2014-11-07',
      rating: 4.6,
      director: 'Christopher Nolan',
      poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      synopsis: 'A team of explorers travel through a wormhole in space to ensure humanity’s survival.',
      cast: [
        { name: 'Matthew McConaughey', role: 'Cooper' },
        { name: 'Anne Hathaway', role: 'Brand' },
        { name: 'Jessica Chastain', role: 'Murph' },
      ],
      reviews: [
        { name: 'James', date: '2025-04-12', rating: 5, comment: 'A visually stunning and emotional journey.' },
        { name: 'Mia', date: '2025-04-11', rating: 4.5, comment: 'A thought-provoking masterpiece.' },
        { name: 'Ethan', date: '2025-04-10', rating: 4.8, comment: 'A must-watch for sci-fi fans.' },
        { name: 'Isabella', date: '2025-04-09', rating: 5, comment: 'Nolan delivers again.' },
        { name: 'Lucas', date: '2025-04-08', rating: 4.7, comment: 'A movie that stays with you.' },
      ],
    },
    {
      id: 4,
      title: 'Avatar',
      genre: 'Sci-Fi',
      releaseDate: '2009-12-18',
      rating: 4.7,
      director: 'James Cameron',
      poster: 'https://image.tmdb.org/t/p/w500/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg',
      synopsis: 'A paraplegic Marine is sent to the moon Pandora on a unique mission.',
      cast: [
      { name: 'Sam Worthington', role: 'Jake Sully' },
      { name: 'Zoe Saldana', role: 'Neytiri' },
      { name: 'Sigourney Weaver', role: 'Dr. Grace Augustine' },
      ],
      reviews: [
      { name: 'Ethan', date: '2025-04-12', rating: 5, comment: 'Visually groundbreaking.' },
      { name: 'Sophia', date: '2025-04-11', rating: 4.5, comment: 'A cinematic marvel.' },
      ],
    },
    {
      id: 5,
      title: 'The Matrix',
      genre: 'Sci-Fi',
      releaseDate: '1999-03-31',
      rating: 4.8,
      director: 'The Wachowskis',
      poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      synopsis: 'A hacker discovers the shocking truth about his reality.',
      cast: [
      { name: 'Keanu Reeves', role: 'Neo' },
      { name: 'Laurence Fishburne', role: 'Morpheus' },
      { name: 'Carrie-Anne Moss', role: 'Trinity' },
      ],
      reviews: [
      { name: 'Liam', date: '2025-04-12', rating: 5, comment: 'A genre-defining masterpiece.' },
      { name: 'Olivia', date: '2025-04-11', rating: 4.8, comment: 'Revolutionary and thrilling.' },
      ],
    },
    {
      id: 6,
      title: 'The Dark Knight',
      genre: 'Action',
      releaseDate: '2008-07-18',
      rating: 4.9,
      director: 'Christopher Nolan',
      poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      synopsis: 'Batman faces the Joker in a battle for Gotham’s soul.',
      cast: [
      { name: 'Christian Bale', role: 'Bruce Wayne / Batman' },
      { name: 'Heath Ledger', role: 'The Joker' },
      { name: 'Aaron Eckhart', role: 'Harvey Dent' },
      ],
      reviews: [
      { name: 'Emma', date: '2025-04-12', rating: 5, comment: 'The best superhero movie ever made.' },
      { name: 'Noah', date: '2025-04-11', rating: 4.9, comment: 'Heath Ledger’s performance is legendary.' },
      ],
    },
    {
      id: 7,
      title: 'Titanic',
      genre: 'Romance',
      releaseDate: '1997-12-19',
      rating: 4.7,
      director: 'James Cameron',
      poster: 'https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg',
      synopsis: 'A love story unfolds aboard the ill-fated Titanic.',
      cast: [
      { name: 'Leonardo DiCaprio', role: 'Jack Dawson' },
      { name: 'Kate Winslet', role: 'Rose DeWitt Bukater' },
      { name: 'Billy Zane', role: 'Cal Hockley' },
      ],
      reviews: [
      { name: 'Sophia', date: '2025-04-12', rating: 5, comment: 'A timeless classic.' },
      { name: 'Lucas', date: '2025-04-11', rating: 4.7, comment: 'Heartbreaking and beautiful.' },
      ],
    },
    {
      id: 8,
      title: 'Jurassic Park',
      genre: 'Adventure',
      releaseDate: '1993-06-11',
      rating: 4.6,
      director: 'Steven Spielberg',
      poster: 'https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg',
      synopsis: 'Dinosaurs are brought back to life in a theme park.',
      cast: [
      { name: 'Sam Neill', role: 'Dr. Alan Grant' },
      { name: 'Laura Dern', role: 'Dr. Ellie Sattler' },
      { name: 'Jeff Goldblum', role: 'Dr. Ian Malcolm' },
      ],
      reviews: [
      { name: 'James', date: '2025-04-12', rating: 5, comment: 'A thrilling adventure.' },
      { name: 'Mia', date: '2025-04-11', rating: 4.6, comment: 'Spielberg at his best.' },
      ],
    },
    {
      id: 9,
      title: 'Gladiator',
      genre: 'Action',
      releaseDate: '2000-05-05',
      rating: 4.8,
      director: 'Ridley Scott',
      poster: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
      synopsis: 'A betrayed Roman general seeks revenge in the arena.',
      cast: [
      { name: 'Russell Crowe', role: 'Maximus' },
      { name: 'Joaquin Phoenix', role: 'Commodus' },
      { name: 'Connie Nielsen', role: 'Lucilla' },
      ],
      reviews: [
      { name: 'Ethan', date: '2025-04-12', rating: 5, comment: 'Epic and unforgettable.' },
      { name: 'Isabella', date: '2025-04-11', rating: 4.8, comment: 'A masterpiece of storytelling.' },
      ],
    },
    {
      id: 10,
      title: 'Forrest Gump',
      genre: 'Drama',
      releaseDate: '1994-07-06',
      rating: 4.9,
      director: 'Robert Zemeckis',
      poster: 'https://image.tmdb.org/t/p/w500/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg',
      synopsis: 'The story of a man with a kind heart and extraordinary life experiences.',
      cast: [
      { name: 'Tom Hanks', role: 'Forrest Gump' },
      { name: 'Robin Wright', role: 'Jenny Curran' },
      { name: 'Gary Sinise', role: 'Lt. Dan Taylor' },
      ],
      reviews: [
      { name: 'Emma', date: '2025-04-12', rating: 5, comment: 'A heartwarming and inspiring tale.' },
      { name: 'Noah', date: '2025-04-11', rating: 4.9, comment: 'Tom Hanks delivers a phenomenal performance.' },
      ],
    },
    {
      id: 11,
      title: 'The Lion King',
      genre: 'Animation',
      releaseDate: '1994-06-24',
      rating: 4.8,
      director: 'Roger Allers, Rob Minkoff',
      poster: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
      synopsis: 'A young lion prince flees his kingdom after the death of his father.',
      cast: [
        { name: 'Matthew Broderick', role: 'Simba' },
        { name: 'James Earl Jones', role: 'Mufasa' },
        { name: 'Jeremy Irons', role: 'Scar' },
      ],
      reviews: [
        { name: 'Sophia', date: '2025-04-12', rating: 5, comment: 'A timeless classic with unforgettable music.' },
        { name: 'Liam', date: '2025-04-11', rating: 4.8, comment: 'A beautiful story of courage and redemption.' },
      ],
    },
    {
      id: 12,
      title: 'Avengers: Endgame',
      genre: 'Action',
      releaseDate: '2019-04-26',
      rating: 4.9,
      director: 'Anthony Russo, Joe Russo',
      poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      synopsis: 'The Avengers assemble once more to reverse Thanos’ actions and restore balance.',
      cast: [
        { name: 'Robert Downey Jr.', role: 'Tony Stark / Iron Man' },
        { name: 'Chris Evans', role: 'Steve Rogers / Captain America' },
        { name: 'Scarlett Johansson', role: 'Natasha Romanoff / Black Widow' },
      ],
      reviews: [
        { name: 'Ethan', date: '2025-04-12', rating: 5, comment: 'An epic conclusion to the Marvel saga.' },
        { name: 'Emma', date: '2025-04-11', rating: 4.9, comment: 'Emotional and action-packed.' },
      ],
    },
    {
      id: 13,
      title: 'Coco',
      genre: 'Animation',
      releaseDate: '2017-11-22',
      rating: 4.8,
      director: 'Lee Unkrich, Adrian Molina',
      poster: 'https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
      synopsis: 'A young boy embarks on a journey to the Land of the Dead to uncover his family’s history.',
      cast: [
        { name: 'Anthony Gonzalez', role: 'Miguel' },
        { name: 'Gael García Bernal', role: 'Héctor' },
        { name: 'Benjamin Bratt', role: 'Ernesto de la Cruz' },
      ],
      reviews: [
        { name: 'Olivia', date: '2025-04-12', rating: 5, comment: 'Heartwarming and visually stunning.' },
        { name: 'Noah', date: '2025-04-11', rating: 4.8, comment: 'A celebration of family and culture.' },
      ],
    },
  ];
  
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    // Temukan movie berdasarkan id
    this.movie = this.movies.find(m => m.id === id) || {};
  }

  updateMovie() {
    console.log('Movie updated:', this.movie);
    this.router.navigate(['/management-movie']);
  }
}
