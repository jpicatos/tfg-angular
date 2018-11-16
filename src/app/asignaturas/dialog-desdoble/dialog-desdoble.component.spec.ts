import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDesdobleComponent } from './dialog-desdoble.component';

describe('DialogDesdobleComponent', () => {
  let component: DialogDesdobleComponent;
  let fixture: ComponentFixture<DialogDesdobleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDesdobleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDesdobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
