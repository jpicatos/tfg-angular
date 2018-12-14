import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarProfesoresComponent } from './importar-profesores.component';

describe('ImportarProfesoresComponent', () => {
  let component: ImportarProfesoresComponent;
  let fixture: ComponentFixture<ImportarProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportarProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
