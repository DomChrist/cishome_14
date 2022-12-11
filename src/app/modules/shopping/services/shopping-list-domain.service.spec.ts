import { TestBed } from '@angular/core/testing';

import { ShoppingListDomainService } from './shopping-list-domain.service';

describe('ShoppingListDomainService', () => {
  let service: ShoppingListDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
