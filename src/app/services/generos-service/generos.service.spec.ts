import { TestBed, inject } from '@angular/core/testing';

import { GenerosService } from './generos.service';

describe('GenerosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerosService]
    });
  });

  it('should be created', inject([GenerosService], (service: GenerosService) => {
    expect(service).toBeTruthy();
  }));
});
