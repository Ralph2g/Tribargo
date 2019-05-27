import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GustosInicialesUsuarioComponent } from './gustos-iniciales-usuario.component';

describe('GustosInicialesUsuarioComponent', () => {
  let component: GustosInicialesUsuarioComponent;
  let fixture: ComponentFixture<GustosInicialesUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GustosInicialesUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GustosInicialesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
