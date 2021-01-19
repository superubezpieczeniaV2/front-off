import { TestBed } from '@angular/core/testing';

import { MethodUseService } from './method-use.service';

describe('MethodUseService', () => {
  let service: MethodUseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodUseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
