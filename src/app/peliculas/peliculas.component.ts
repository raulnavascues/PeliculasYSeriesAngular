import { Router } from '@angular/router';
import { PeliculasService } from './../peliculas-service/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../shared/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {

  private urlPeliculas = 'http://localhost:4284/peliculas';
  private urlBusquedaPeliculas = 'http://localhost:4284/peliculas/busqueda?nombre=';

  public peliculas: Pelicula[] = [];

  private json: any;
  constructor(private peliculasService: PeliculasService,  private router: Router) { }

  ngOnInit() {
     this.peliculasService.getPeliculas(this.urlPeliculas).subscribe(_peliculas => this.peliculas = _peliculas);
  }

  buscar(event) {
    this.peliculasService.getPeliculas(this.urlBusquedaPeliculas + event.target.value).subscribe(_peliculas => this.peliculas = _peliculas);
 }

  goPlaces() {
    this.router.navigate(['/detalle-pelicula']);
  }
}
