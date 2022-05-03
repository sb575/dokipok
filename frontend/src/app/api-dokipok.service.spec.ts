import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiDokipokService } from './api-dokipok.service';

describe('ApiDokipokService', () => {
  let service: ApiDokipokService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiDokipokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

