import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirProfesorComponent } from './anadir-profesor.component';

describe('AnadirProfesorComponent', () => {
  let component: AnadirProfesorComponent;
  let fixture: ComponentFixture<AnadirProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
