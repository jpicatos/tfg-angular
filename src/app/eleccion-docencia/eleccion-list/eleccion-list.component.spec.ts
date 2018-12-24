import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionListComponent } from './eleccion-list.component';

describe('EleccionListComponent', () => {
  let component: EleccionListComponent;
  let fixture: ComponentFixture<EleccionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleccionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
