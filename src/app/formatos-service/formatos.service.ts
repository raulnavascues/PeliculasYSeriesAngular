import { Formato } from './../shared/formato';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Mensaje} from './../shared/Mensaje';

@Injectable()
export class FormatosService {

  constructor(private http: HttpClient) { }

  getFormatos(url: string) {
    return this.http.get<Formato[]>(url);
  }
}
