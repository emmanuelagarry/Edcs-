import { TestBed } from '@angular/core/testing';

import { KeyvalueService } from './keyvalue.service';

describe('KeyvalueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyvalueService = TestBed.get(KeyvalueService);
    expect(service).toBeTruthy();
  });
});
