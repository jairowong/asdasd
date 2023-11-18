import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocenteComponent } from './admin-docente.component';

describe('AdminDocenteComponent', () => {
  let component: AdminDocenteComponent;
  let fixture: ComponentFixture<AdminDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDocenteComponent]
    });
    fixture = TestBed.createComponent(AdminDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
