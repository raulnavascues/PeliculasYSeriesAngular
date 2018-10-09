import { TestBed, inject } from '@angular/core/testing';

import { FormatosServiceService } from './formatos.service';

describe('FormatosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatosServiceService]
    });
  });

  it('should be created', inject([FormatosServiceService], (service: FormatosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
