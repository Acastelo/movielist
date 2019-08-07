import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { AppComponent } from './app.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { CardMovieService } from './card-movie.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AccessibilityBarComponent } from './accessibility-bar/accessibility-bar.component';

const routes= [
  { path: '',  component: MovieListComponent },
  { path: 'movie', component: CardMovieComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CardMovieComponent,
    MovieListComponent,
    AccessibilityBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CardMovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
