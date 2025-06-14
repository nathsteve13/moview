import { TestBed } from '@angular/core/testing';

import { MoviewService } from './moview.service';

describe('MoviewService', () => {
  let service: MoviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
