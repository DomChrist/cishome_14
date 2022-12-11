import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDashboardStoresComponent } from './shopping-dashboard-stores.component';

describe('ShoppingDashboardStoresComponent', () => {
  let component: ShoppingDashboardStoresComponent;
  let fixture: ComponentFixture<ShoppingDashboardStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingDashboardStoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingDashboardStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
