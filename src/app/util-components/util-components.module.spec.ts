import { UtilComponentsModule } from './util-components.module';

describe('UtilComponentsModule', () => {
  let utilComponentsModule: UtilComponentsModule;

  beforeEach(() => {
    utilComponentsModule = new UtilComponentsModule();
  });

  it('should create an instance', () => {
    expect(utilComponentsModule).toBeTruthy();
  });
});
