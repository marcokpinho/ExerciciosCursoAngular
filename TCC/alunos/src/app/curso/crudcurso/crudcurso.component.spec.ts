import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcursoComponent } from './crudcurso.component';

describe('CrudcursoComponent', () => {
  let component: CrudcursoComponent;
  let fixture: ComponentFixture<CrudcursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudcursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
