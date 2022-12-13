import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysWidgetComponent } from './wdys-widget.component';

describe('WdysWidgetComponent', () => {
  let component: WdysWidgetComponent;
  let fixture: ComponentFixture<WdysWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
