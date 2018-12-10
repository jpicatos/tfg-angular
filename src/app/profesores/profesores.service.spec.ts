import { TestBed } from '@angular/core/testing';

import { ProfesoresService } from './profesores.service';

describe('ProfesoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfesoresService = TestBed.get(ProfesoresService);
    expect(service).toBeTruthy();
  });
});
