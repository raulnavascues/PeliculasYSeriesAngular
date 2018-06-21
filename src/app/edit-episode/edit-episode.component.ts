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
  formepisodio = new FormGroup ({
    pelicula: new FormControl('ARR'),
    episodio: new FormControl(),
    temporada: new FormControl(),
    numEpisodio: new FormControl()
  });

  private urlEpisodios = 'http://localhost:4284/episodios/addEpisodio';
  private urlEpisodios2 = 'http://localhost:4284/episodios/ObtenerEpisodios2?clave=';
  private mensaje: Mensaje[];

  constructor(private episodioService: EpisodiosService) { }

  ngOnInit() {

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
