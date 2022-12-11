import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemBoxComponent } from './shopping-list-item-box.component';

describe('ShoppingListItemBoxComponent', () => {
  let component: ShoppingListItemBoxComponent;
  let fixture: ComponentFixture<ShoppingListItemBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListItemBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
