import { TestBed } from '@angular/core/testing';

import { HttpClientExternalService } from './http-client-external.service';

describe('HttpClientExternalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientExternalService = TestBed.get(HttpClientExternalService);
    expect(service).toBeTruthy();
  });
});
