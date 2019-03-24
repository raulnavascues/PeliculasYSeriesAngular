import { Temporada } from './../shared/temporada';
import { FormGroup, FormControl } from '@angular/forms';
import { GenerosService } from './../services/generos-service/generos.service';
import { EstadosService } from './../services/estados-service/estados.service';
import { FormatosService } from './../services/formatos-service/formatos.service';
import { Estado } from './../shared/estado';
import { Genero } from './../shared/genero';
import { Tipo } from './../shared/tipo';
import { Formato } from './../shared/formato';
import { PeliculasDetalleComponent } from './../peliculas-detalle/peliculas-detalle';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PeliculasService } from '../services/peliculas-service/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pelicula } from '../shared/pelicula';
import { Productora } from '../shared/productora';
import { TiposPeliculasService } from '../services/tipos-service/tipos.service';
import { ProductorasService } from '../services/productoras-service/productoras.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  /**
  *Formulario para añadir o editar una pelicula o serie
  */
  public anadirSerPel: FormGroup;

  /** URL de carga de los formatos*/
  private urlFormatos = 'http://localhost:4284/Formatos';
  /** URL de carga de los tipos */
  private urlTipos = 'http://localhost:4284/Tipos';
  /** URL de carga de las productoras */
  private urlProductoras = 'http://localhost:4284/Productoras';
  /** URL de  carga de los generos */
  private urlGeneros = 'http://localhost:4284/Generos';
  /** URL de carga de los estados */
  private urlEstados = 'http://localhost:4284/Estados';
  /** URL para cargar los detalles de una pelicula o serie */
  private urlPelicula = 'http://localhost:4284/Peliculas/ConseguirDatosPelicula?id=';
  /** URL para dar de alta una pelicula o una serie */
  private urlAddPelSerie = 'http://localhost:4284/Peliculas/AddPeliSerie';
  /** URL para actualizar el detalle de una pelicula o serie */
  private urlUpdatePelSerie = 'http://localhost:4284/Peliculas/UpdatePeliSerie';

  private modoActualizar: Boolean = false;

  private listadoFormatos: Formato[] = [];
  private listadoTipos: Tipo[] = [];
  private listadoProductoras: Productora[] = [];
  private listadoGeneros: Genero[] = [];
  private listadoEstados: Estado[] = [];

  private titulo: String = '';

  private idPelicula: String;

  constructor(private formatoService: FormatosService, private tiposService: TiposPeliculasService,
    private productorasService: ProductorasService, private generosService: GenerosService, private estadoService: EstadosService,
    private peliculaService: PeliculasService, private route: ActivatedRoute) {

      this.route.queryParamMap.subscribe(params => {
        this.idPelicula = params.get('id');
        if (this.idPelicula !== null) {
              this.modoActualizar = true;
        }
      });

    }

   /**
     * Inicializa el formulario de alta/modificación de la película
     * @param clav parametro para la clave
     * @param nom parametro para el nombre
     * @param prod parametro para la productora
     * @param gen parametro para el genero
     * @param tip parametro para el tipo
     * @param form parametro para el formato
     * @param est parametro para el estado
     * @param temp parametro para la temporada
     * @param sipn parametro para la sipnosis
     */
   private inicializarFormulario(id: Number, clav: String, nom: String, prod: String, gen: String, tip: String, form: String,
    est: String, temp: Number, sipn: String) {
      this.anadirSerPel = new FormGroup({
        Id: new FormControl(id),
        Clave: new FormControl(clav),
        Nombre: new FormControl(nom),
        Productoras: new FormControl(prod),
        Generos: new FormControl(gen),
        Tipo: new FormControl(tip),
        Formato: new FormControl(form),
        Estados: new FormControl(est),
        Temporada: new FormControl(temp),
        Sipnosis: new FormControl(sipn)
      });
    }

  ngOnInit() {

    this.inicializarFormulario(0, '', '', '', '', '', '', '', 0, '');

    this.formatoService.getFormatos(this.urlFormatos).subscribe(_listadoFormato => {
      this.listadoFormatos = _listadoFormato,
      this.tiposService.getTipos(this.urlTipos).subscribe(_listadoTipo => {
        this.listadoTipos = _listadoTipo,
        this.productorasService.getProductoras(this.urlProductoras).subscribe(_listadoProductora => {
          this.listadoProductoras = _listadoProductora,
          this.generosService.getGeneros(this.urlGeneros).subscribe(_listadoGenero => {
            this.listadoGeneros = _listadoGenero,
            this.estadoService.getEstados(this.urlEstados).subscribe(_listadoEstado => {
              this.listadoEstados = _listadoEstado,
              this.CargarPeliculaSerie();
            });
          });
        });
      });
    });
  }

  public CargarPeliculaSerie() {
    // Comprobar si el Id viene lleno
    if (this.idPelicula !== null) {
      this.titulo = 'Editar pelicula o serie';
      this.peliculaService.getPelicula(this.urlPelicula + this.idPelicula).subscribe(_pelicula => {
        console.log('Id: ' + _pelicula[0].Id),
        this.inicializarFormulario(
          _pelicula[0].Id,
          _pelicula[0].Clave,
          _pelicula[0].Nombre,
          _pelicula[0].Productora,
          _pelicula[0].Genero,
          _pelicula[0].Tipo,
          _pelicula[0].Formato,
          _pelicula[0].Estado,
          _pelicula[0].Temporada,
          _pelicula[0].Sipnosis);
      });
    } else {
      this.titulo = 'Añadir pelicula o serie';
    }
  }

  onClick() {
    // console.log('formepisodio: ' + this.anadirSerPel.value);
    /*if (this.modoActualizar === true) {
      this.peliculaService.addPeliculas(this.urlUpdatePelSerie, this.anadirSerPel.value ).subscribe();
    } else {
      this.peliculaService.addPeliculas(this.urlAddPelSerie, this.anadirSerPel.value ).subscribe(); // _mensaje => this.mensaje = _mensaje);
    }*/
    this.peliculaService.addPeliculas(this.urlAddPelSerie, this.anadirSerPel.value ).subscribe(); // _mensaje => this.mensaje = _mensaje);
  }
}
