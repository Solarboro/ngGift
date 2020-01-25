import { TestBed } from '@angular/core/testing';

import { GiftManagementService } from './gift-management.service';

describe('GiftManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftManagementService = TestBed.get(GiftManagementService);
    expect(service).toBeTruthy();
  });
});
