import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../../shared/estado';

@Injectable()
export class EstadosService {

  constructor(private http: HttpClient) { }

  getEstados(url: string) {
    return this.http.get<Estado[]>(url);
  }
}
