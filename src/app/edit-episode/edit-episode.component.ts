import { Temporada } from './../shared/temporada';
import { Episodio } from './../shared/episodio';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Formato } from './../shared/formato';
import { Pelicula } from './../shared/pelicula';
import { PeliculasService } from './../services/peliculas-service/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EpisodiosService } from './../services/episodios-service/episodios.service';
import { Mensaje } from '../shared/Mensaje';
import { FormatosService } from '../services/formatos-service/formatos.service';

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
  private formepisodio: FormGroup;

  private urlEpisodios = 'http://localhost:4284/episodios/addEpisodio';
  private urlDetalleEpisodio = 'http://localhost:4284/episodios/ObtenerEpisodio?clave=';
  // private urlEpisodios2 = 'http://localhost:4284/episodios/ObtenerEpisodios2?clave=';
  private urlPeliculas = 'http://localhost:4284/Peliculas/ObtenerSeries';
  private urlFormatos = 'http://localhost:4284/Formatos';

  private anadir: Boolean = false;

  private mensaje: Mensaje[];

  constructor(private peliculaService: PeliculasService, private episodioService: EpisodiosService,
              private formatoService: FormatosService, private route: ActivatedRoute) {

    let anad: String;

    this.route.queryParamMap.subscribe(params => {
      this.idEpisode = params.get('id');
      anad = params.get('anadir');
      this.nombrePelicula = params.get('serie');
    });

    this.anadir = (anad === 'true');
  } //  constructor

  inicializarFormulario(nom: string, claPel: String, numEpi: Number, tempo: Number, forma: string) {
    this.formepisodio = new FormGroup({
    pelicula: new FormControl(claPel),
    listaSeries: new FormControl(claPel),
    episodio: new FormControl(nom),
    temporada: new FormControl(tempo),
    numEpisodio: new FormControl(numEpi),
    formato: new FormControl(forma),
    sipnosis: new FormControl('')
    });
  }

  ngOnInit() {
    this.inicializarFormulario('', this.nombrePelicula, 0, 0, '') ;

    this.peliculaService.getPelicula(this.urlPeliculas).subscribe(_series => {
      this.listadoSerie = _series,
      this.formatoService.getFormatos(this.urlFormatos).subscribe(_listadoFormato => {
        this.listadoFormatos = _listadoFormato,
        this.cargarDatosEpisodio();
      });
    });

  }

  cargarDatosEpisodio() {
    if (this.anadir === false) {
      this.episodioService.getEpisodios(this.urlDetalleEpisodio + this.idEpisode).subscribe(_detalleCapitulo => {
        this.inicializarFormulario(_detalleCapitulo[0].Episodio, _detalleCapitulo[0].Pelicula, _detalleCapitulo[0].NumEpisodio,
          _detalleCapitulo[0].Temporada, _detalleCapitulo[0].Formato);
      });
    } else {
      this.inicializarFormulario('', this.nombrePelicula, 0, 0, ''); // , _detalleCapitulo[0].Formato)
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
