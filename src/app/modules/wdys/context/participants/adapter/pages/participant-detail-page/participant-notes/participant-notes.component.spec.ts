import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantNotesComponent } from './participant-notes.component';

describe('ParticipantNotesComponent', () => {
  let component: ParticipantNotesComponent;
  let fixture: ComponentFixture<ParticipantNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
