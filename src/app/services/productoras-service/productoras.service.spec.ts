import { TestBed, inject } from '@angular/core/testing';

import { ProductorasService } from './productoras.service';

describe('ProductorasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductorasService]
    });
  });

  it('should be created', inject([ProductorasService], (service: ProductorasService) => {
    expect(service).toBeTruthy();
  }));
});
