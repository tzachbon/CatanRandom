import { TestBed } from '@angular/core/testing';

import { DataStorageServiceService } from './data-storage-service.service';

describe('DataStorageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStorageServiceService = TestBed.get(DataStorageServiceService);
    expect(service).toBeTruthy();
  });
});
