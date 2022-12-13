import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCreateNoteDialogComponent } from './session-create-note-dialog.component';

describe('SessionCreateNoteDialogComponent', () => {
  let component: SessionCreateNoteDialogComponent;
  let fixture: ComponentFixture<SessionCreateNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionCreateNoteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionCreateNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
