import { TestBed } from '@angular/core/testing';

import { ThedataService } from './thedata.service';

describe('ThedataService', () => {
  let service: ThedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
