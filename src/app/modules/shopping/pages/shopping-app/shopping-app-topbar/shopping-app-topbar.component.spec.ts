import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAppTopbarComponent } from './shopping-app-topbar.component';

describe('ShoppingAppTopbarComponent', () => {
  let component: ShoppingAppTopbarComponent;
  let fixture: ComponentFixture<ShoppingAppTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingAppTopbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingAppTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
