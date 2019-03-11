import { Productora } from './../../shared/productora';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductorasService {

  constructor(private http: HttpClient) { }

  getProductoras(url: string) {
    return this.http.get<Productora[]>(url);
  }
}
