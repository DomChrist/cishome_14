import { TestBed } from '@angular/core/testing';

import { SpotifyShowsService } from './spotify-shows.service';

describe('SpotifyShowsService', () => {
  let service: SpotifyShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
