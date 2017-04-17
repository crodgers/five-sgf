import { TestBed, inject } from '@angular/core/testing';

import { SgfService } from './sgf.service';

describe('SgfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SgfService]
    });
  });

  it('should ...', inject([SgfService], (service: SgfService) => {
    expect(service).toBeTruthy();
  }));
});
