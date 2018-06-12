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
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    FooterComponent,
    PeliculasDetalleComponent,
    EditEpisodeComponent,
    MenuComponent
  ],
  imports: [
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
  // bootstrap: [MenuComponent, PeliculasComponent, FooterComponent]
  bootstrap: [MenuComponent, EditEpisodeComponent, FooterComponent]
})
export class AppModule { }
