import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasDetalleComponent } from './peliculas-detalle.component';

describe('PeliculasDetalleComponent', () => {
  let component: PeliculasDetalleComponent;
  let fixture: ComponentFixture<PeliculasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
