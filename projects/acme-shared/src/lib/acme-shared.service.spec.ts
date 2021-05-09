import { TestBed } from '@angular/core/testing';

import { AcmeSharedService } from './acme-shared.service';

describe('AcmeSharedService', () => {
  let service: AcmeSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcmeSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
