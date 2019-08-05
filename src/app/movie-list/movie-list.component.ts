import { Component, OnInit } from '@angular/core';
import { CardMovieService } from '../card-movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public latests: any;
  public conf: any;
  public search: string;
  public textTitle= "Melhores Filmes";
  public indexClick: object;
  public genres: any;

  constructor(public cardMovieService: CardMovieService) { }

  ngOnInit() {
    this.cardMovieService.getConfiguration().subscribe(data => {
      this.conf = data;
      localStorage.setItem('config', JSON.stringify(this.conf));
    });

    this.cardMovieService.getTopRated().subscribe(data => {
      this.latests = data;
    });

    this.cardMovieService.getGenres().subscribe(data => {
      this.genres = [...data["genres"]];
    });

  }

  getImagePath() {
    return `${this.conf.images.base_url}w154`;
  };

  searchMovieByName() {
    this.textTitle = `Pesquisando por: ${this.search}`;
    this.cardMovieService.getMovieByName(this.search).subscribe(data => {
      this.latests = data;
    });
  };

  searchMovieByGenres(genreId) {
    this.cardMovieService.getMovieByGenre(genreId).subscribe(data => {
      this.latests = data;
      console.log(this.latests);
    })
  }

  sendMovieToCard(movie) {
    localStorage.setItem('movieToCard', JSON.stringify(movie));
  };



}
