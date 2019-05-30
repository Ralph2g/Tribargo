import { TestBed } from '@angular/core/testing';

import { BaresApiService } from './bares-api.service';

describe('BaresApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaresApiService = TestBed.get(BaresApiService);
    expect(service).toBeTruthy();
  });
});
