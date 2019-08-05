import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardMovieService {
  public apiKey = "a509eec233f24562b3cc3c25f2a4e19f";
  public lang = "pt-BR";

  constructor(public http: HttpClient) { }

  authGuest() {
    return this.http.get(`${API}authentication/guest_session/new?api_key=${this.apiKey}`);

  }

  getConfiguration() {
    return this.http.get(`${API}configuration?api_key=${this.apiKey}`);
  }

  getMovieById (movie_id: any) {
    return this.http.get(`${API}movie/${movie_id}?api_key=${this.apiKey}&language=${this.lang}`);
  }

  getTopRated () {
    return this.http.get(`${API}movie/popular?api_key=${this.apiKey}&language=${this.lang}&page=1`);
  }

  getMovieByName (query: string) {
    return this.http.get(`${API}search/movie?api_key=${this.apiKey}&language=${this.lang}&query=${query}&page=3&include_adult=false`);
  }
  
  getGenres() {
    return this.http.get(`${API}genre/movie/list?api_key=${this.apiKey}&language=${this.lang}`);
  }

  getMovieByGenre (genreId: string) {
    return this.http.get(`${API}discover/movie?api_key=${this.apiKey}&language=${this.lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`);
  }
}
