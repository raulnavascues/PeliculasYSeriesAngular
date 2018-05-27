import { Ng2Accordion } from 'ng2-native-accordion';
import { EpisodiosService } from './episodios-service/episodios.service';
import { HttpModule } from '@angular/http';
import { PeliculasService } from './peliculas-service/peliculas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { jquery } from 'jquery';
import { bootstrap } from 'bootstrap';
import { DataTable } from 'angular-2-data-table';
import { FooterComponent } from './footer/footer.component';
import { PeliculasDetalleComponent } from './peliculas-detalle/peliculas-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    // PeliculasComponent,
    FooterComponent,
    PeliculasDetalleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2Accordion,
    /*,
    DataTable,
    jquery,
    bootstrap*/
  ],
  providers: [
    PeliculasService,
    EpisodiosService
  ],
  // bootstrap: [PeliculasComponent, FooterComponent]
  bootstrap: [PeliculasDetalleComponent, FooterComponent]
})
export class AppModule { }
