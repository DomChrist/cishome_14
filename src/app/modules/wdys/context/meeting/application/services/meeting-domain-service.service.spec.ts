import { TestBed } from '@angular/core/testing';

import { MeetingDomainService } from './meeting-domain.service';

describe('MeetingDomainServiceService', () => {
  let service: MeetingDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
