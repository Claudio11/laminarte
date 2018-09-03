import { TestBed, inject } from '@angular/core/testing';

import { SectionsDataService } from './sections-data.service';

describe('SectionsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionsDataService]
    });
  });

  it('should be created', inject([SectionsDataService], (service: SectionsDataService) => {
    expect(service).toBeTruthy();
  }));
});
