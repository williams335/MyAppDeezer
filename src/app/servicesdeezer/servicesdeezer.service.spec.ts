import { TestBed } from '@angular/core/testing';

import { ServicesdeezerService } from './servicesdeezer.service';

describe('ServicesdeezerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesdeezerService = TestBed.get(ServicesdeezerService);
    expect(service).toBeTruthy();
  });
});
