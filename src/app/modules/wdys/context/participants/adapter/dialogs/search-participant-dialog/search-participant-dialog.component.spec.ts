import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchParticipantDialogComponent } from './search-participant-dialog.component';

describe('SearchParticipantDialogComponent', () => {
  let component: SearchParticipantDialogComponent;
  let fixture: ComponentFixture<SearchParticipantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchParticipantDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchParticipantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
