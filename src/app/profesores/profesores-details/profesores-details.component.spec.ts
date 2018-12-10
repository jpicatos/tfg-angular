import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresDetailsComponent } from './profesores-details.component';

describe('ProfesoresDetailsComponent', () => {
  let component: ProfesoresDetailsComponent;
  let fixture: ComponentFixture<ProfesoresDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesoresDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
