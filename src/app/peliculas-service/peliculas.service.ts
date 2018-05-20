import { Pelicula } from './../shared/pelicula';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

/*const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/

@Injectable()
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPeliculas(url: string) {
      return this.http.get<Pelicula[]>(url);
  }

  getPelicula(url) {
      return this.http.get<Pelicula[]>(url);
  }
}
// Campeones (Captain Tsubasa)
