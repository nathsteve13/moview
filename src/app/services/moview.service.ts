import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviewService {
  private baseUrl = 'https://ubaya.xyz/hybrid/160422124/project_uas';

  constructor(private http: HttpClient) {}

  // LOGIN
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      email: email,
      password: password,
    };

    return this.http.post(`${this.baseUrl}/login.php`, body, { headers });
  }

  // REGISTER
  register(
    name: string,
    email: string,
    password: string,
    phone: string,
    photo: File
  ): Observable<any> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('photo', photo);

    return this.http.post(`${this.baseUrl}/register.php`, formData);
  }

  // GET ALL MOVIES
  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get_all_movies.php`);
  }

  // GET DETAIL MOVIE
  getMovieDetail(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie_detail.php?id=${id}`);
  }

  // ADD MOVIE
  addMovie(movieData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/add_movie.php`, movieData, {
      headers,
    });
  }

  // UPDATE MOVIE
  updateMovie(movieData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = new URLSearchParams();
    body.set('id', movieData.id);
    body.set('title', movieData.title);
    body.set('genre', movieData.genre);
    body.set('release_date', movieData.release_date);
    body.set('rating', movieData.rating.toString());
    body.set('director', movieData.director);
    body.set('synopsis', movieData.synopsis);
    body.set('poster', movieData.poster);

    return this.http.post(`${this.baseUrl}/update_movie.php`, body.toString(), {
      headers,
    });
  }

  // DELETE MOVIE
  deleteMovie(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = new URLSearchParams();
    body.set('id', id.toString());

    return this.http.post(`${this.baseUrl}/delete_movie.php`, body.toString(), {
      headers,
    });
  }

  // ADD REVIEW
  addReview(movieId: number, name: string, rating: number, comment: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const date = new Date().toISOString().split('T')[0];

    const body = new URLSearchParams();
    body.set('movie_id', movieId.toString());
    body.set('name', name);
    body.set('rating', rating.toString());
    body.set('comment', comment);
    body.set('date', date);

    return this.http.post(`${this.baseUrl}/add_review.php`, body.toString(), {
      headers,
    });
  }
}
