import { TestBed } from '@angular/core/testing';

import { MonthyBillingService } from './monthy-billing.service';

describe('MonthyBillingService', () => {
  let service: MonthyBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthyBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
