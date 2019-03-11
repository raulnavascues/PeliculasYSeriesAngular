import { Pelicula } from './../../shared/pelicula';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Mensaje } from '../../shared/Mensaje';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data',
        'token': 'VeTTgA7fDiwD2fWhQ'
})};

@Injectable()
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPeliculas(url: string) {
      return this.http.get<Pelicula[]>(url);
  }

  getPelicula(url) {
      return this.http.get<Pelicula[]>(url);
  }

  addPeliculas(url: string, json: any) {
      /*const data = new FormData();
      data.append('anadirSerPel', JSON.stringify(json));*/

    return this.http.post<Mensaje[]>(url, json);
  }
}
// Campeones (Captain Tsubasa)
