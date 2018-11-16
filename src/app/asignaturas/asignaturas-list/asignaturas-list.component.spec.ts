import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasListComponent } from './asignaturas-list.component';

describe('AsignaturasListComponent', () => {
  let component: AsignaturasListComponent;
  let fixture: ComponentFixture<AsignaturasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
