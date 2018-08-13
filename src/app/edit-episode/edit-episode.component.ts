import { Pelicula } from './../shared/pelicula';
import { PeliculasService } from './../peliculas-service/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EpisodiosService } from './../episodios-service/episodios.service';
import { Mensaje } from '../shared/Mensaje';

@Component({
  selector: 'app-edit-episode',
  templateUrl: './edit-episode.component.html',
  styleUrls: ['./edit-episode.component.css']
})

export class EditEpisodeComponent implements OnInit {
  private listadoSerie: Pelicula[] = [];

  formepisodio = new FormGroup ({
    pelicula: new FormControl('TBBT'),
    listaSeries: new FormControl(),
    episodio: new FormControl(),
    temporada: new FormControl(),
    numEpisodio: new FormControl()
  });

  private urlEpisodios = 'http://localhost:4284/episodios/addEpisodio';
  // private urlEpisodios2 = 'http://localhost:4284/episodios/ObtenerEpisodios2?clave=';
  private urlPeliculas = 'http://localhost:4284/Peliculas/ObtenerSeries';
  private mensaje: Mensaje[];

  constructor( private peliculaService: PeliculasService, private episodioService: EpisodiosService) { }

  ngOnInit() {
    this.peliculaService.getPeliculas(this.urlPeliculas).subscribe(_listadoSerie => this.listadoSerie = _listadoSerie);

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
