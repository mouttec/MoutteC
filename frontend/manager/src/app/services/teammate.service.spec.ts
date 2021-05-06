import { TestBed } from '@angular/core/testing';

import { TeammateService } from './teammate.service';

describe('TeammateService', () => {
  let service: TeammateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeammateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
