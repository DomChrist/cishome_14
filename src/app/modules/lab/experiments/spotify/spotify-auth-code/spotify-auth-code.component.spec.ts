import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyAuthCodeComponent } from './spotify-auth-code.component';

describe('SpotifyAuthCodeComponent', () => {
  let component: SpotifyAuthCodeComponent;
  let fixture: ComponentFixture<SpotifyAuthCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyAuthCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyAuthCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
