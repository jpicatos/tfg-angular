import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirAsignaturaComponent } from './anadir-asignatura.component';

describe('AnadirAsignaturaComponent', () => {
  let component: AnadirAsignaturaComponent;
  let fixture: ComponentFixture<AnadirAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirAsignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
