import { Temporada } from './../shared/temporada';
import { Episodio } from './../shared/episodio';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EpisodiosService } from './../episodios-service/episodios.service';

@Component({
  selector: 'app-edit-episode',
  templateUrl: './edit-episode.component.html',
  styleUrls: ['./edit-episode.component.css']
})
export class EditEpisodeComponent implements OnInit {
  episodios = new FormGroup ({
    pelicula: new FormControl('ARR'),
    episodio: new FormControl(),
    temporada: new FormControl(),
    numEpisodio: new FormControl()
  });

  private urlEpisodios = 'http://localhost:4284/episodios/addEpisodio';
  private urlEpisodios2 = 'http://localhost:4284/episodios/ObtenerEpisodios2?clave=';


  constructor(private episodioService: EpisodiosService) { }

  ngOnInit() {

  }

/**
 * Llamada al web service con el boton "ENVIAR"
 */
  onClick() {
    console.log( this.episodioService.editEpisodio(this.urlEpisodios, JSON.stringify(this.episodios.value)) );
  }
}
