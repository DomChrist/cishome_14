import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysAppComponent } from './wdys-app.component';

describe('WdysAppComponent', () => {
  let component: WdysAppComponent;
  let fixture: ComponentFixture<WdysAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
