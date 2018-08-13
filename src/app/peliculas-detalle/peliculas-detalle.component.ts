import { Pelicula } from './../shared/pelicula';
import { Temporada } from './../shared/temporada';
import { Episodio } from './../shared/episodio';
import { EpisodiosService } from './../episodios-service/episodios.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeliculasService } from './../peliculas-service/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas-detalle',
  templateUrl: './peliculas-detalle.component.html',
  styleUrls: ['./peliculas-detalle.component.css'],
})
export class PeliculasDetalleComponent implements OnInit, OnDestroy {

  private urlPelicula = 'http://localhost:4284/peliculas/ConsultaPelicula?id=';
  private urlEpisodios = 'http://localhost:4284/episodios/ObtenerEpisodios?clave=';
  private urlEpisodios2 = 'http://localhost:4284/episodios/ObtenerEpisodios2?clave=';
  private pelicula: Pelicula[] = [];
  private episodios: Episodio[] = [];
  private temporadas: Temporada[] = [];
  private numTemporadas: number;

  constructor(private peliculasService: PeliculasService,
              private episodiosService: EpisodiosService) { }

  ngOnInit() {
    // let peliculaTemp: Pelicula[] = [];

    this.peliculasService.getPelicula(this.urlPelicula + '487').subscribe(
      _pelicula => {
        this.pelicula = _pelicula,
        this.getListaEpisodios2(_pelicula);
      }
    );
  }

  ngOnDestroy() {

  }

  getListaEpisodios(clave: string, tipo: string) {
    if (tipo === 'SER' || tipo === 'SMA' || tipo === 'SDI') {
      this.episodiosService.getEpisodios(this.urlEpisodios + clave).subscribe(_episodios => this.episodios = _episodios);
    }
  }

  getListaEpisodios2(peliT: Pelicula[]) {
    if (peliT[0].claveTipo === 'SER' || peliT[0].claveTipo === 'SMA' || peliT[0].claveTipo === 'SDI' ) {
      this.episodiosService.getTemporadas(this.urlEpisodios2 + peliT[0].Clave).subscribe(_temporadas => this.temporadas = _temporadas);
    }
  }
}
