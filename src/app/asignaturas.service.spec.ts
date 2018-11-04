import { TestBed } from '@angular/core/testing';

import { AsignaturasService } from './asignaturas.service';

describe('AsignaturasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignaturasService = TestBed.get(AsignaturasService);
    expect(service).toBeTruthy();
  });
});
