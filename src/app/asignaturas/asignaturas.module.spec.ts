import { AsignaturasModule } from './asignaturas.module';

describe('AsignaturasModule', () => {
  let asignaturasModule: AsignaturasModule;

  beforeEach(() => {
    asignaturasModule = new AsignaturasModule();
  });

  it('should create an instance', () => {
    expect(asignaturasModule).toBeTruthy();
  });
});
