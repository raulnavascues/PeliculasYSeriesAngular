import { Pelicula } from './../shared/pelicula';
import { Temporada } from './../shared/temporada';
import { Episodio } from './../shared/episodio';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { errorHandler } from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'enctype': 'multipart/form-data'
    // 'Authorization': 'my-auth-token'
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
    console.log('Valores2: ' + json);
    /*return this.http.post<Episodio>(url, json, httpOptions)
            .pipe(
              // console.error(json)
            );*/
    console.log(url + json);
    return this.http.post<Episodio>(url, json, httpOptions).catch(errorHandler);
  }
}
