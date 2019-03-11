import { TestBed, inject } from '@angular/core/testing';

import { FormatosService } from './formatos.service';

describe('FormatosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatosService]
    });
  });

  it('should be created', inject([FormatosService], (service: FormatosService) => {
    expect(service).toBeTruthy();
  }));
});
