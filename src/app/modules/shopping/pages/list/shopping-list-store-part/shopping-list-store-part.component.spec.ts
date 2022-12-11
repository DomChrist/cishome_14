import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListStorePartComponent } from './shopping-list-store-part.component';

describe('ShoppingListStorePartComponent', () => {
  let component: ShoppingListStorePartComponent;
  let fixture: ComponentFixture<ShoppingListStorePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListStorePartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListStorePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
