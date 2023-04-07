import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyCurrentlyPlayingComponent } from './spotify-currently-playing.component';

describe('SpotifyCurrentlyPlayingComponent', () => {
  let component: SpotifyCurrentlyPlayingComponent;
  let fixture: ComponentFixture<SpotifyCurrentlyPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyCurrentlyPlayingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyCurrentlyPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
