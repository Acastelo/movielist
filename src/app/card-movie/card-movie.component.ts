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
  constructor(public cardMovieService: CardMovieService) { }

  ngOnInit() {
    this.cardMovieService.authGuest().subscribe((data) => {
      this.guest = data;
    });

    this.cardMovieService.getConfiguration().subscribe(data => {
      this.conf = data;
      console.log(this.conf);
    });

    this.cardMovieService.getMovieById(100).subscribe(data => {
      this.movie = data;
      console.log(this.movie);
    });
  }

  getImagePath() {
    return `${this.conf.images.base_url}w300${this.movie.poster_path}`;
  };
  
}
