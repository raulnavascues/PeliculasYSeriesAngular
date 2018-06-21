import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { PeliculasService } from './../peliculas-service/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../shared/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  /*
  private urlPeliculas: string = 'http://localhost:8080/PeliculasySeries/server/pelisseries';
  private urlBusquedaPeliculas: string = 'http://localhost:8080/PeliculasySeries/server/pelisseries/busqueda?nombre=';
  */
  // private urlPeliculas: string = 'http://peliculas.localhost/';
  private urlPeliculas = 'http://localhost:4284/peliculas';
  private urlBusquedaPeliculas = 'http://localhost:4284/peliculas/busqueda?nombre=';
  private loading = false;
  // private results: Observable<Pelicula[]>;
  private searchField: FormControl;
  public peliculas: Pelicula[] = [];

  private json: any;
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
     this.peliculasService.getPeliculas(this.urlPeliculas).subscribe(_peliculas => this.peliculas = _peliculas);
  }

  pruebas(event) {
    // console.log(event, event.keyCode, event.keyIdentifier,event.target.value);
    this.peliculasService.getPeliculas(this.urlBusquedaPeliculas + event.target.value).subscribe(_peliculas => this.peliculas = _peliculas);
 }
}
