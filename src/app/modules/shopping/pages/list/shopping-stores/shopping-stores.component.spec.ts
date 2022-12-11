import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingStoresComponent } from './shopping-stores.component';

describe('ShoppingStoresComponent', () => {
  let component: ShoppingStoresComponent;
  let fixture: ComponentFixture<ShoppingStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingStoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
