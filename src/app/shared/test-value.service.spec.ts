import { TestBed, inject } from '@angular/core/testing';

import { TestValueService } from './test-value.service';

describe('TestValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestValueService]
    });
  });

  it('should be created', inject([TestValueService], (service: TestValueService) => {
    expect(service).toBeTruthy();
  }));
});
