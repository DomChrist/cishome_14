import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysShareSessionComponent } from './wdys-share-session.component';

describe('WdysShareSessionComponent', () => {
  let component: WdysShareSessionComponent;
  let fixture: ComponentFixture<WdysShareSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysShareSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysShareSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
