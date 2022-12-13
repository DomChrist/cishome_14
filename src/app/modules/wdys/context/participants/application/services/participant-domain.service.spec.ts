import { TestBed } from '@angular/core/testing';

import { ParticipantDomainService } from './participant-domain.service';

describe('ParticipantDomainService', () => {
  let service: ParticipantDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
