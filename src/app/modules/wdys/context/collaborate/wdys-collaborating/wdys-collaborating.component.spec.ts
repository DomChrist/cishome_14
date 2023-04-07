import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysCollaboratingComponent } from './wdys-collaborating.component';

describe('WdysCollaboratingComponent', () => {
  let component: WdysCollaboratingComponent;
  let fixture: ComponentFixture<WdysCollaboratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysCollaboratingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysCollaboratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
