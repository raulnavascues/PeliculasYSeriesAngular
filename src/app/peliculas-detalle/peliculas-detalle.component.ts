import { Pelicula } from './../shared/pelicula';
import { Temporada } from './../shared/temporada';
import { Episodio } from './../shared/episodio';
import { EpisodiosService } from './../episodios-service/episodios.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { PeliculasService } from './../peliculas-service/peliculas.service';
import { AccordionModule } from 'ngx-accordion';

@Component({
  selector: 'app-peliculas-detalle',
  templateUrl: './peliculas-detalle.component.html',
  styleUrls: ['./peliculas-detalle.component.css']
})
export class PeliculasDetalleComponent implements OnInit, OnDestroy {

  private urlPelicula = 'http://localhost:4284/peliculas/ConsultaPelicula?id=';
  private urlEpisodios = 'http://localhost:4284/episodios/ObtenerEpisodios?clave=';
  private urlEpisodios2 = 'http://localhost:4284/episodios/ObtenerEpisodios2?clave=';
  private pelicula: Pelicula[] = [];
  private episodios: Episodio[] = [];
  private temporadas: Temporada[] = [];
  private numTemporadas: number;

  constructor(private peliculasService: PeliculasService, private episodiosService: EpisodiosService) { }

  ngOnInit() {
    // let peliculaTemp: Pelicula[] = [];

    this.peliculasService.getPelicula(this.urlPelicula + '45').subscribe(
      _pelicula => {
        this.pelicula = _pelicula,
        this.getListaEpisodios2(_pelicula);
      }
    );
  }

  ngOnDestroy() {

  }

  getListaEpisodios(clave: string, tipo: string) {
    if (tipo === 'ser') {
      this.episodiosService.getEpisodios(this.urlEpisodios + clave).subscribe(_episodios => this.episodios = _episodios);
    }
  }

  getListaEpisodios2(peliT: Pelicula[]) {
    if (peliT[0].claveTipo === 'SER' ) {
      this.episodiosService.getTemporadas(this.urlEpisodios2 + peliT[0].Clave).subscribe(_temporadas => this.temporadas = _temporadas);
    }
  }
}
