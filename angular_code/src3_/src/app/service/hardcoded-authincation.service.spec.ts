import { TestBed } from '@angular/core/testing';

import { HardcodedAuthincationService } from './hardcoded-authincation.service';

describe('HardcodedAuthincationService', () => {
  let service: HardcodedAuthincationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthincationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
