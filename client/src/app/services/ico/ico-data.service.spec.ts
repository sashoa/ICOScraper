import { TestBed, inject } from '@angular/core/testing';

import { IcoDataService } from './ico-data.service';

describe('IcoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IcoDataService]
    });
  });

  it('should be created', inject([IcoDataService], (service: IcoDataService) => {
    expect(service).toBeTruthy();
  }));
});
