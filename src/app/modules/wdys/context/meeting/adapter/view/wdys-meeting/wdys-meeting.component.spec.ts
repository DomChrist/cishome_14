import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysMeetingComponent } from './wdys-meeting.component';

describe('WdysMeetingComponent', () => {
  let component: WdysMeetingComponent;
  let fixture: ComponentFixture<WdysMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
