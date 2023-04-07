import { TestBed } from '@angular/core/testing';

import { SessionDomainService } from './session-domain.service';

describe('SessionDomainService', () => {
  let service: SessionDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
