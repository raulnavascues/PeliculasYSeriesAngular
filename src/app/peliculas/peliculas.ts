import { PeliculasDetalleComponent } from './../peliculas-detalle/peliculas-detalle';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from './../peliculas-service/peliculas.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Pelicula } from '../shared/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.html',
  styleUrls: ['./peliculas.css'],
})
export class PeliculasComponent implements OnInit {

  private urlPeliculas = 'http://localhost:4284/peliculas';
  private urlBusquedaPeliculas = 'http://localhost:4284/peliculas/busqueda?nombre=';

  returnUrl: string;

  private route: ActivatedRoute;
private router: Router;

  public peliculas: Pelicula[] = [];

  private json: any;
  @ViewChild(PeliculasDetalleComponent) detallePelicula;

  constructor(private peliculasService: PeliculasService, ) { }

  ngOnInit() {
     this.peliculasService.getPeliculas(this.urlPeliculas).subscribe(_peliculas => this.peliculas = _peliculas);
     // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  buscar(event) {
    this.peliculasService.getPeliculas(this.urlBusquedaPeliculas + event.target.value).subscribe(_peliculas => this.peliculas = _peliculas);
 }

  goPlaces() {
    this.detallePelicula.setPeliculaID('487');
    this.router.navigate(['./detalle-pelicula/detalle-pelicula']);
  }
}
