import { Formato } from './../shared/formato';
import { Pelicula } from './../shared/pelicula';
import { PeliculasService } from './../peliculas-service/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EpisodiosService } from './../episodios-service/episodios.service';
import { Mensaje } from '../shared/Mensaje';
import { FormatosService } from '../formatos-service/formatos.service';

@Component({
  selector: 'app-edit-episode',
  templateUrl: './edit-episode.component.html',
  styleUrls: ['./edit-episode.component.css']
})

export class EditEpisodeComponent implements OnInit {
  private listadoSerie: Pelicula[] = [];
  private listadoFormatos: Formato[] = [];

  formepisodio = new FormGroup ({
    pelicula: new FormControl('TBBT'),
    listaSeries: new FormControl('TBBT'),
    episodio: new FormControl(),
    temporada: new FormControl(),
    numEpisodio: new FormControl(),
    formato: new FormControl()
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
    this.peliculaService.getPeliculas(this.urlPeliculas).subscribe(_listadoSerie => this.listadoSerie = _listadoSerie);
    this.formatoService.getFormatos(this.urlFormatos).subscribe(_listadoFormato => this.listadoFormatos = _listadoFormato);


    // alert('Listado de series: ' + this.listadoSerie);

    console.log('Listado: ' + this.listadoSerie);
  }

/**
 * Llamada al web service con el boton "ENVIAR"
 */
  onClick() {
    this.episodioService.editEpisodio(this.urlEpisodios, this.formepisodio.value ).subscribe(_mensaje => this.mensaje = _mensaje)  ;
    // .subscribe(_mensaje => this.mensaje = _mensaje).catch();
    console.log(this.mensaje);
  }
}
