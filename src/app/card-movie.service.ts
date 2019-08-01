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
    return this.http.get('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=a509eec233f24562b3cc3c25f2a4e19f');

  }

  getMovieById (movie_id){
    return this.http.get(`${API}movie/${movie_id}?api_key=${this.apiKey}&language=${this.lang}`);
  }

  getConfiguration(){
    return this.http.get(`${API}configuration?api_key=${this.apiKey}`);
  }
}
