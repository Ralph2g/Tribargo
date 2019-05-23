import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GustosUsuarioComponent } from './gustos-usuario.component';

describe('GustosUsuarioComponent', () => {
  let component: GustosUsuarioComponent;
  let fixture: ComponentFixture<GustosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GustosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GustosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
