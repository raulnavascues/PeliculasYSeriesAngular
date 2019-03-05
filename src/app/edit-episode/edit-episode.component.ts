import { Temporada } from './../shared/temporada';
import { Episodio } from './../shared/episodio';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Formato } from './../shared/formato';
import { Pelicula } from './../shared/pelicula';
import { PeliculasService } from './../peliculas-service/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EpisodiosService } from './../episodios-service/episodios.service';
import { Mensaje } from '../shared/Mensaje';
import { FormatosService } from '../formatos-service/formatos.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content': 'application/json',
    'Content-Type':  'application/json;charset=utf-8',
    // 'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8',
    // 'Authorization': 'Basic ' + btoa(Username + ":" + Password),
  }),
};

@Component({
  selector: 'app-edit-episode',
  templateUrl: './edit-episode.component.html',
  styleUrls: ['./edit-episode.component.css']
})



export class EditEpisodeComponent implements OnInit {
  private listadoSerie: Pelicula[] = [];
  private listadoFormatos: Formato[] = [];
  private nombrePelicula: String = '';
  private idEpisode: String = '0';
  private detalleEpisodios: Episodio[] = [];
  private numEpisodio: Number;
  private numTemporada: Number;
  private formEpisodio: FormGroup;

  public formepisodio = new FormGroup ({
   pelicula: new FormControl(this.nombrePelicula),
    listaSeries: new FormControl(this.nombrePelicula),
    // pelicula: new FormControl(''),
    // listaSeries: new FormControl(''),
    episodio: new FormControl(this.numEpisodio),
    temporada: new FormControl(this.numTemporada),
    numEpisodio: new FormControl(),
    formato: new FormControl('')
  });

  private urlEpisodios = 'http://localhost:4284/episodios/addEpisodio';
  private urlDetalleEpisodio = 'http://localhost:4284/episodios/ObtenerEpisodio?clave=';
  // private urlEpisodios2 = 'http://localhost:4284/episodios/ObtenerEpisodios2?clave=';
  private urlPeliculas = 'http://localhost:4284/Peliculas/ObtenerSeries';
  private urlFormatos = 'http://localhost:4284/Formatos';

  private anadir: Boolean = false;

  private mensaje: Mensaje[];

  constructor(private peliculaService: PeliculasService, private episodioService: EpisodiosService,
              private formatoService: FormatosService, private route: ActivatedRoute, private fb: FormBuilder) {

    let anad: String;

    this.route.queryParamMap.subscribe(params => {
      this.idEpisode = params.get('id');
      anad = params.get('anadir');
      this.nombrePelicula = params.get('serie');
    });

    this.anadir = (anad === 'true');
    console.log ('nombrePelicula: ' + this.nombrePelicula);
  } //  constructor

  ngOnInit() {
    this.peliculaService.getPelicula(this.urlPeliculas).subscribe(_series => {
      this.listadoSerie = _series,
      this.formatoService.getFormatos(this.urlFormatos).subscribe(_listadoFormato => {
        this.listadoFormatos = _listadoFormato,
        this.cargarDatosEpisodio();
      } );
    }
    );
/*
    this.formEpisodio = this.fb.group({
    pelicula: new FormControl(this.nombrePelicula),
    listaSeries: new FormControl(this.nombrePelicula),
    episodio: new FormControl(this.numEpisodio),
    temporada: new FormControl(this.numTemporada),
    numEpisodio: new FormControl(),
    formato: new FormControl('')
    });
    console.log('nombre serie: ' + this.nombrePelicula);
    console.log('numero episodio: ' + this.numEpisodio);
    console.log('numero temporada: ' + this.numTemporada);
    */
  }

  cargarDatosEpisodio() {
    console.log ('Anadir: ' + this.anadir);
    if (this.anadir === true) {
      this.episodioService.getEpisodios(this.urlDetalleEpisodio + this.idEpisode).subscribe(_detalleCapitulo => {
        console.log(_detalleCapitulo[0]);
        this.nombrePelicula = _detalleCapitulo[0].Pelicula,
        this.numEpisodio = _detalleCapitulo[0].NumEpisodio,
        this.numTemporada = _detalleCapitulo[0].Temporada;
      });
    }
  }

/**
 * Llamada al web service con el boton "ENVIAR"
 */
/*
  onClick() {
    console.log('formepisodio: ' + this.formepisodio.value);
    this.episodioService.editEpisodio(this.urlEpisodios, this.formepisodio.value ).subscribe(_mensaje => this.mensaje = _mensaje);
  }
  */
}
