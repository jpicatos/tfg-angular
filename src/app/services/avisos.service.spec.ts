import { TestBed } from '@angular/core/testing';

import { AvisosService } from './avisos.service';

describe('AvisosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvisosService = TestBed.get(AvisosService);
    expect(service).toBeTruthy();
  });
});
