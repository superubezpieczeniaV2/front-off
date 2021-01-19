import { TestBed } from '@angular/core/testing';

import { EnginePowerService } from './engine-power.service';

describe('EnginePowerService', () => {
  let service: EnginePowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnginePowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
