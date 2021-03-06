import { Pelicula } from './../shared/pelicula';
import { Temporada } from './../shared/temporada';
import { Episodio } from './../shared/episodio';
import { EpisodiosService } from './../services/episodios-service/episodios.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeliculasService } from './../services/peliculas-service/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas-detalle',
  templateUrl: './peliculas-detalle.html',
  styleUrls: ['./peliculas-detalle.css'],
})
export class PeliculasDetalleComponent implements OnInit, OnDestroy {

  private urlPelicula = 'http://localhost:4284/peliculas/ConsultaPelicula?id=';
  private urlEpisodios = 'http://localhost:4284/episodios/ObtenerEpisodios?clave=';
  private urlEpisodios2 = 'http://localhost:4284/episodios/ObtenerEpisodios2?clave=';
  private pelicula: Pelicula[] = [];
  private episodios: Episodio[] = [];
  private temporadas: Temporada[] = [];
  private numTemporadas: number;
  private peliculaID: String;

  constructor(private peliculasService: PeliculasService,
              private episodiosService: EpisodiosService,
              private route: ActivatedRoute) {

    this.route.queryParamMap.subscribe(params => {
      this.peliculaID = params.get('id');
    });
  }


  ngOnInit() {
    /*if (this.peliculaID === '' || this.peliculaID === null || this.peliculaID === undefined) {
      this.peliculaID = '487';
    }*/

    this.peliculasService.getPelicula(this.urlPelicula + this.peliculaID).subscribe(
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
/**
 * Recupera el listado de los capitulos de una cierta serie
 * @param peliT Objeto de la pelicula seleccionada
 */
  getListaEpisodios2(peliT: Pelicula[]) {
    if (peliT[0].claveTipo === 'SER' || peliT[0].claveTipo === 'SMA' || peliT[0].claveTipo === 'SDI' ) {
      this.episodiosService.getTemporadas(this.urlEpisodios2 + peliT[0].Clave).subscribe(_temporadas => {
        this.temporadas = _temporadas;
      });
      // => this.temporadas = _temporadas);
    }
  }
}
