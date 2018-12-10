import { ProfesoresModule } from './profesores.module';

describe('ProfesoresModule', () => {
  let profesoresModule: ProfesoresModule;

  beforeEach(() => {
    profesoresModule = new ProfesoresModule();
  });

  it('should create an instance', () => {
    expect(profesoresModule).toBeTruthy();
  });
});
