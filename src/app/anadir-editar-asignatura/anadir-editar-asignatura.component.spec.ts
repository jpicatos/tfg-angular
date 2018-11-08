import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirEditarAsignaturaComponent } from './anadir-editar-asignatura.component';

describe('AnadirEditarAsignaturaComponent', () => {
  let component: AnadirEditarAsignaturaComponent;
  let fixture: ComponentFixture<AnadirEditarAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirEditarAsignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirEditarAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
