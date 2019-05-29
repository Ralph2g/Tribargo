import { TestBed } from '@angular/core/testing';

import { RestApiServiceService } from './rest-api-service.service';

describe('RestApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiServiceService = TestBed.get(RestApiServiceService);
    expect(service).toBeTruthy();
  });
});
