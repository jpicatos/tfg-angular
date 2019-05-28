import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendariosListDialogComponent } from './calendarios-list-dialog.component';

describe('CalendariosListDialogComponent', () => {
  let component: CalendariosListDialogComponent;
  let fixture: ComponentFixture<CalendariosListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendariosListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendariosListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
