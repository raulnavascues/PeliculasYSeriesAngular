import { TestBed, inject } from '@angular/core/testing';

import { EpisodiosService } from './episodios.service';

describe('EpisodiosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpisodiosService]
    });
  });

  it('should be created', inject([EpisodiosService], (service: EpisodiosService) => {
    expect(service).toBeTruthy();
  }));
});
