import { TestBed } from '@angular/core/testing';

import { TypeOwnerService } from './type-owner.service';

describe('TypeOwnerService', () => {
  let service: TypeOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
