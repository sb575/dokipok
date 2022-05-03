import { TestBed } from '@angular/core/testing';

import { ApiDokipokService } from './api-dokipok.service';

describe('ApiDokipokService', () => {
  let service: ApiDokipokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDokipokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
