import { HttpHeaders } from '@angular/common/http';
import { Formato } from './../shared/formato';
import { Pelicula } from './../shared/pelicula';
import { PeliculasService } from './../peliculas-service/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public nombrePelicula: String = 'KYLEX';

  formepisodio = new FormGroup ({
   pelicula: new FormControl(this.nombrePelicula),
    listaSeries: new FormControl(this.nombrePelicula),
   /*pelicula: new FormControl(''),
    listaSeries: new FormControl(''),*/
    episodio: new FormControl(),
    temporada: new FormControl(),
    numEpisodio: new FormControl(),
    formato: new FormControl('')
  });

  private urlEpisodios = 'http://localhost:4284/episodios/addEpisodio';
  // private urlEpisodios2 = 'http://localhost:4284/episodios/ObtenerEpisodios2?clave=';
  private urlPeliculas = 'http://localhost:4284/Peliculas/ObtenerSeries';
  private urlFormatos = 'http://localhost:4284/Formatos';

  private mensaje: Mensaje[];

  constructor( private peliculaService: PeliculasService,
               private episodioService: EpisodiosService,
               private formatoService: FormatosService) { }

  ngOnInit() {
    this.peliculaService.getPelicula(this.urlPeliculas).subscribe(_series => {
      this.listadoSerie = _series,
      this.formatoService.getFormatos(this.urlFormatos).subscribe(_listadoFormato => this.listadoFormatos = _listadoFormato);
    }
  );
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
