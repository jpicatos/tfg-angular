import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarAsignaturasComponent } from './importar-asignaturas.component';

describe('ImportarAsignaturasComponent', () => {
  let component: ImportarAsignaturasComponent;
  let fixture: ComponentFixture<ImportarAsignaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportarAsignaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
