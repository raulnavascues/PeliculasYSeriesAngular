import { PeliculasDetalleComponent } from './../peliculas-detalle/peliculas-detalle';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PeliculasService } from '../peliculas-service/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pelicula } from '../shared/pelicula';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  private urlPeliculas = 'http://localhost:4284/peliculas';
  private urlBusquedaPeliculas = 'http://localhost:4284/peliculas/busqueda?nombre=';

  returnUrl: string;

  private route: ActivatedRoute;

  public peliculas: Pelicula[] = [];

  private json: any;
  @ViewChild(PeliculasDetalleComponent) detallePelicula;

  constructor(private peliculasService: PeliculasService, private router: Router) { }

  ngOnInit() {
     this.peliculasService.getPeliculas(this.urlPeliculas).subscribe(_peliculas => this.peliculas = _peliculas);
     // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  buscar(event) {
    this.peliculasService.getPeliculas(this.urlBusquedaPeliculas + event.target.value).subscribe(_peliculas => this.peliculas = _peliculas);
 }

}
