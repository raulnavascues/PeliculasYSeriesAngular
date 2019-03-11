import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../../shared/genero';

@Injectable()
export class GenerosService {

  constructor(private http: HttpClient) { }

  getGeneros(url: string) {
    return this.http.get<Genero[]>(url);
  }

}
