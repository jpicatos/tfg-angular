import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDialogComponent } from './eliminar-dialog.component';

describe('EliminarDialogComponent', () => {
  let component: EliminarDialogComponent;
  let fixture: ComponentFixture<EliminarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
