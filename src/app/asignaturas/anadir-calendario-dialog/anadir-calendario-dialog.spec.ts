import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirCalendarioDialogComponent } from './anadir-calendario-dialog.component';

describe('CalendariosListDialogComponent', () => {
  let component: AnadirCalendarioDialogComponent;
  let fixture: ComponentFixture<AnadirCalendarioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirCalendarioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirCalendarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
