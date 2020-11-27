import { TestBed } from '@angular/core/testing';

import { GarrisonService } from './garrison.service';

describe('GarrisonService', () => {
  let service: GarrisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarrisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
