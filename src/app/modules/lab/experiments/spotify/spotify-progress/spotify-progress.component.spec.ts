import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyProgressComponent } from './spotify-progress.component';

describe('SpotifyProgressComponent', () => {
  let component: SpotifyProgressComponent;
  let fixture: ComponentFixture<SpotifyProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
