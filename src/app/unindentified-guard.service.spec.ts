import { TestBed } from '@angular/core/testing';

import { UnindentifiedGuardService } from './unindentified-guard.service';

describe('UnindentifiedGuardService', () => {
  let service: UnindentifiedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnindentifiedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
