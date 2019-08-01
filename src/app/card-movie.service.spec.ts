import { TestBed } from '@angular/core/testing';

import { CardMovieService } from './card-movie.service';

describe('CardMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardMovieService = TestBed.get(CardMovieService);
    expect(service).toBeTruthy();
  });
});
