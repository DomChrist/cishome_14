import { TestBed } from '@angular/core/testing';

import { WdysDashboardService } from './wdys-dashboard.service';

describe('WdysDashboardService', () => {
  let service: WdysDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WdysDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
