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

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  public anadirSerPel: FormGroup; /* = new FormGroup({
    Clave: new FormControl(''),
    Nombre: new FormControl(''),
    Productoras: new FormControl(''),
    Generos: new FormControl(''),
    Tipo: new FormControl(''),
    Formato: new FormControl(''),
    Estados: new FormControl(''),
    Temporada: new FormControl('0'),
    Sipnosis: new FormControl('')
  });*/

  private urlFormatos = 'http://localhost:4284/Formatos';
  private urlTipos = 'http://localhost:4284/Tipos';
  private urlProductoras = 'http://localhost:4284/Productoras';
  private urlGeneros = 'http://localhost:4284/Generos';
  private urlEstados = 'http://localhost:4284/Estados';
  private urlPelicula = 'http://localhost:4284/Peliculas/ConseguirDatosPelicula?id=';

  private urlEpisodios = 'http://localhost:4284/Peliculas/AddPeliSerie';

  private listadoFormatos: Formato[] = [];
  private listadoTipos: Tipo[] = [];
  private listadoProductoras: Productora[] = [];
  private listadoGeneros: Genero[] = [];
  private listadoEstados: Estado[] = [];

  private idPelicula: String;

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
   private inicializarFormulario(clav: String, nom: String, prod: String, gen: String, tip: String, form: String,
      est: String, temp: String, sipn: String) {
        this.anadirSerPel = new FormGroup({
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

    this.inicializarFormulario('', '', '', '', '', '', '', '0', '');

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
    let produc: String = '';
    // Comprobar si el Id viene lleno
    if (this.idPelicula !== null) {
      this.peliculaService.getPelicula(this.urlPelicula + this.idPelicula).subscribe(_pelicula => {

        produc = _pelicula[0].getProductora,
        console.log('Productora: ' + produc);

        /*this.anadirSerPel = new FormGroup({
          Clave: new FormControl(_pelicula[0].Clave),
          Nombre: new FormControl(_pelicula[0].Nombre),
          Productoras: new FormControl(produc),
          Generos: new FormControl(''),
          Tipo: new FormControl(''),
          Formato: new FormControl(''),
          Estados: new FormControl(''),
          Temporada: new FormControl('0'),
          Sipnosis: new FormControl(_pelicula[0].getSipnosis)
        });*/
      });
    }
  }

  onClick() {
    console.log('formepisodio: ' + this.anadirSerPel.value);
    this.peliculaService.addPeliculas(this.urlEpisodios, this.anadirSerPel.value ).subscribe(); // _mensaje => this.mensaje = _mensaje);
  }
}
