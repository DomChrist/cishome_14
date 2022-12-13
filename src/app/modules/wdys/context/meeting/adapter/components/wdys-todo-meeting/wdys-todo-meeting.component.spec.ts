import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysTodoMeetingComponent } from './wdys-todo-meeting.component';

describe('WdysTodoMeetingComponent', () => {
  let component: WdysTodoMeetingComponent;
  let fixture: ComponentFixture<WdysTodoMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysTodoMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysTodoMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
