import { Component, OnInit } from '@angular/core';
import { CardMovieService } from '../card-movie.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  public guest: any;
  public movie: any;
  public conf: any;
  public latest: any;
  public genres: any;

  constructor(public cardMovieService: CardMovieService) { }

  ngOnInit() {
    this.cardMovieService.authGuest().subscribe((data) => {
      this.guest = data;
    });

    this.conf = JSON.parse(localStorage.getItem("config"));
    this.movie = JSON.parse(localStorage.getItem("movieToCard"));
    this.genres = JSON.parse(localStorage.getItem("movieGenres"));

    this.cardMovieService.getTopRated().subscribe(data => {
      this.latest = data;
    });

  }

  getImagePath() {
    return `${this.conf.images.base_url}w300${this.movie.poster_path}`;
  };
  
}
