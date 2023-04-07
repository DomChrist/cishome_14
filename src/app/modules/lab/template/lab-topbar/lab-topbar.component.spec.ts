import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTopbarComponent } from './lab-topbar.component';

describe('LabTopbarComponent', () => {
  let component: LabTopbarComponent;
  let fixture: ComponentFixture<LabTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabTopbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
