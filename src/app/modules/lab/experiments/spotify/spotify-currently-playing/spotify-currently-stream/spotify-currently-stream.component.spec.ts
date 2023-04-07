import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyCurrentlyStreamComponent } from './spotify-currently-stream.component';

describe('SpotifyCurrentlyStreamComponent', () => {
  let component: SpotifyCurrentlyStreamComponent;
  let fixture: ComponentFixture<SpotifyCurrentlyStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyCurrentlyStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyCurrentlyStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
