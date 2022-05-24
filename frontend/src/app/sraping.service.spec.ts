import { TestBed } from '@angular/core/testing';

import { SrapingService } from './sraping.service';

describe('SrapingService', () => {
  let service: SrapingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrapingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
