import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingWidgetComponent } from './shopping-widget.component';

describe('ShoppingWidgetComponent', () => {
  let component: ShoppingWidgetComponent;
  let fixture: ComponentFixture<ShoppingWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
