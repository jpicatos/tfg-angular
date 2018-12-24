import { EleccionDocenciaModule } from './eleccion-docencia.module';

describe('EleccionDocenciaModule', () => {
  let eleccionDocenciaModule: EleccionDocenciaModule;

  beforeEach(() => {
    eleccionDocenciaModule = new EleccionDocenciaModule();
  });

  it('should create an instance', () => {
    expect(eleccionDocenciaModule).toBeTruthy();
  });
});
