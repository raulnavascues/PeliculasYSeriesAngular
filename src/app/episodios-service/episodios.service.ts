import { Mensaje } from './../shared/Mensaje';
import { Pelicula } from './../shared/pelicula';
import { Temporada } from './../shared/temporada';
import { Episodio } from './../shared/episodio';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'enctype': 'multipart/form-data'
  })
};

@Injectable()
export class EpisodiosService {

  constructor(private http: HttpClient) { }

  getEpisodios(url: string) {
    return this.http.get<Episodio[]>(url);
  }

  getTemporadas(url: string) {
    return this.http.get<Temporada[]>(url);
  }

  editEpisodio(url: string, json: any) {
    return this.http.post<Mensaje[]>(url, json, httpOptions);
                                            /*.subscribe(
                                                res => {
                                                 return res;
                                                },
                                                err => {
                                                  return err;
                                                }
                                            ); */// .catch(errorHandler);
  }
}
