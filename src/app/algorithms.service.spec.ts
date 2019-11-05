import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AlgorithmsService } from './algorithms.service';

describe('AlgorithmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AlgorithmsService = TestBed.get(AlgorithmsService);
    expect(service).toBeTruthy();
  });
});
