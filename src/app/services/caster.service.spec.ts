import { TestBed } from '@angular/core/testing';

import { CasterService } from './caster.service';

describe('CasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasterService = TestBed.get(CasterService);
    expect(service).toBeTruthy();
  });
});
