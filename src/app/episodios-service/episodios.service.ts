import { Episodio } from './../shared/episodio';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class EpisodiosService {

  constructor(private http: HttpClient) { }

  getEpisodios(url: string){
    return this.http.get<Episodio[]>(url);
}

}
