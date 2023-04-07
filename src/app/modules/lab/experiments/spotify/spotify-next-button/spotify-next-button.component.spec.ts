import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyNextButtonComponent } from './spotify-next-button.component';

describe('SpotifyNextButtonComponent', () => {
  let component: SpotifyNextButtonComponent;
  let fixture: ComponentFixture<SpotifyNextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyNextButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyNextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
