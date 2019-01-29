import { TestBed } from '@angular/core/testing';

import { EleccionService } from './eleccion.service';

describe('EleccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EleccionService = TestBed.get(EleccionService);
    expect(service).toBeTruthy();
  });
});
