import { TestBed } from '@angular/core/testing';

import { PaxUserService } from './pax-user.service';

describe('PaxUserService', () => {
  let service: PaxUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaxUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
