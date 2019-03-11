import { PeliculasService } from './../services/peliculas-service/peliculas.service';
import { Temporada } from './../shared/temporada';
import { FormGroup, FormControl } from '@angular/forms';
import { EstadosService } from './../services/estados-service/estados.service';
import { Estado } from './../shared/estado';
import { Genero } from './../shared/genero';
import { ProductorasService } from './../services/productoras-service/productoras.service';
import { Productora } from './../shared/productora';
import { TiposPeliculasService } from './../services/tipos-service/tipos.service';
import { Tipo } from './../shared/tipo';
import { FormatosService } from './../services/formatos-service/formatos.service';
import { Formato } from './../shared/formato';
import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../services/generos-service/generos.service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  public anadirSerPel = new FormGroup({
    Clave: new FormControl(''),
    Nombre: new FormControl(''),
    Productoras: new FormControl(''),
    Generos: new FormControl(''),
    Tipo: new FormControl(''),
    Formato: new FormControl(''),
    Estados: new FormControl(''),
    Temporada: new FormControl('0'),
    Sipnosis: new FormControl('')
  });

  private urlFormatos = 'http://localhost:4284/Formatos';
  private urlTipos = 'http://localhost:4284/Tipos';
  private urlProductoras = 'http://localhost:4284/Productoras';
  private urlGeneros = 'http://localhost:4284/Generos';
  private urlEstados = 'http://localhost:4284/Estados';

  private urlEpisodios = 'http://localhost:4284/Peliculas/AddPeliSerie';

  private listadoFormatos: Formato[] = [];
  private listadoTipos: Tipo[] = [];
  private listadoProductoras: Productora[] = [];
  private listadoGeneros: Genero[] = [];
  private listadoEstados: Estado[] = [];

  constructor(private formatoService: FormatosService, private tiposService: TiposPeliculasService,
    private productorasService: ProductorasService, private generosService: GenerosService, private estadoService: EstadosService,
    private peliculaService: PeliculasService) { }

  ngOnInit() {
    this.formatoService.getFormatos(this.urlFormatos).subscribe(_listadoFormato => {
      this.listadoFormatos = _listadoFormato,
      this.tiposService.getTipos(this.urlTipos).subscribe(_listadoTipo => {
        this.listadoTipos = _listadoTipo,
        this.productorasService.getProductoras(this.urlProductoras).subscribe(_listadoProductora => {
          this.listadoProductoras = _listadoProductora,
          this.generosService.getGeneros(this.urlGeneros).subscribe(_listadoGenero => {
            this.listadoGeneros = _listadoGenero,
            this.estadoService.getEstados(this.urlEstados).subscribe(_listadoEstado => {
              this.listadoEstados = _listadoEstado;
            });
          });
        });
      });
    });
  }

  onClick() {
    console.log('formepisodio: ' + this.anadirSerPel.value);
    this.peliculaService.addPeliculas(this.urlEpisodios, this.anadirSerPel.value ).subscribe(); // _mensaje => this.mensaje = _mensaje);
  }
}
