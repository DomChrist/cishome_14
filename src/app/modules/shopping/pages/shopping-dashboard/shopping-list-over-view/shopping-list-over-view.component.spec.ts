import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListOverViewComponent } from './shopping-list-over-view.component';

describe('ShoppingListOverViewComponent', () => {
  let component: ShoppingListOverViewComponent;
  let fixture: ComponentFixture<ShoppingListOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListOverViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
