import { TestBed } from '@angular/core/testing';

import { WdysMeetingRootService } from './wdys-meeting-root.service';

describe('WdysMeetingRootService', () => {
  let service: WdysMeetingRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WdysMeetingRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
