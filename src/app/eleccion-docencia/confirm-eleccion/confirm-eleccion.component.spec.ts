import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEleccionComponent } from './confirm-eleccion.component';

describe('ConfirmEleccionComponent', () => {
  let component: ConfirmEleccionComponent;
  let fixture: ComponentFixture<ConfirmEleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmEleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
