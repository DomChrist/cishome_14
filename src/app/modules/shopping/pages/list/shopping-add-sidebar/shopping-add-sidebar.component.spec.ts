import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAddSidebarComponent } from './shopping-add-sidebar.component';

describe('ShoppingAddSidebarComponent', () => {
  let component: ShoppingAddSidebarComponent;
  let fixture: ComponentFixture<ShoppingAddSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingAddSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingAddSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
