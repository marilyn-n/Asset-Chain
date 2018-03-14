import { TestBed, inject } from '@angular/core/testing';

import { TestamentService } from './testament.service';

describe('TestamentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestamentService]
    });
  });

  it('should be created', inject([TestamentService], (service: TestamentService) => {
    expect(service).toBeTruthy();
  }));
});
