import { Mensaje } from './../shared/Mensaje';
import { ActivatedRoute } from '@angular/router';
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
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  public anadirSerPel: FormGroup;

  private urlFormatos = 'http://localhost:4284/Formatos';
  private urlTipos = 'http://localhost:4284/Tipos';
  private urlProductoras = 'http://localhost:4284/Productoras';
  private urlGeneros = 'http://localhost:4284/Generos';
  private urlEstados = 'http://localhost:4284/Estados';
  private urlPelicula = 'http://localhost:4284/Peliculas/ConseguirDatosPelicula?id=';

  private urlEpisodios = 'http://localhost:4284/Peliculas/AddUpdatePeliSerie';

  private listadoFormatos: Formato[] = [];
  private listadoTipos: Tipo[] = [];
  private listadoProductoras: Productora[] = [];
  private listadoGeneros: Genero[] = [];
  private listadoEstados: Estado[] = [];

  private idPelicula: String;

  private titulo: String = '';

  private mensaje: Mensaje;

  constructor(private formatoService: FormatosService, private tiposService: TiposPeliculasService,
    private productorasService: ProductorasService, private generosService: GenerosService, private estadoService: EstadosService,
    private peliculaService: PeliculasService, private route: ActivatedRoute) {

        this.route.queryParamMap.subscribe(params => {
          this.idPelicula = params.get('id');
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
          Productora: new FormControl(prod),
          Genero: new FormControl(gen),
          Tipo: new FormControl(tip),
          Formato: new FormControl(form),
          Estado: new FormControl(est),
          Temporada: new FormControl(temp),
          Sipnosis: new FormControl(sipn)
        });
      }

  ngOnInit() {

    this.inicializarFormulario(0, '', '', '', 'INDET', '', '', '', 0, '');

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
    console.log('formepisodio: ' + this.anadirSerPel.value);
    this.peliculaService.addPeliculas(this.urlEpisodios, this.anadirSerPel.value ).subscribe(
      (data) => this.onSuccess(data),
      (error) => this.handleError(error)
    );
  }

public getMensajes(): Mensaje {
  return this.mensaje;
}

  onSuccess(msg) {
    this.mensaje = msg;
    console.log(msg);
  }

  handleError(error) {
console.error(error);
  }
}
