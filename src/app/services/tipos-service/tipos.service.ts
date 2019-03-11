import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tipo } from '../../shared/tipo';
import {Mensaje} from './../../shared/Mensaje';

@Injectable()
export class TiposPeliculasService {

  constructor(private http: HttpClient) { }

  getTipos(url: string) {
    return this.http.get<Tipo[]>(url);
  }

}
