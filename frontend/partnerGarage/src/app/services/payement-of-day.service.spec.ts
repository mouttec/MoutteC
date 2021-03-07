import { TestBed } from '@angular/core/testing';

import { PayementOfDayService } from './payement-of-day.service';

describe('PayementOfDayService', () => {
  let service: PayementOfDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayementOfDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
