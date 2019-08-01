import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { CardMovieService } from './card-movie.service';

@NgModule({
  declarations: [
    AppComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [CardMovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
