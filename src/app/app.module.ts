import { EstadosService } from './services/estados-service/estados.service';
import { GenerosService } from './services/generos-service/generos.service';
import { TiposPeliculasService } from './services/tipos-service/tipos.service';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { Ng2Accordion } from 'ng2-native-accordion';
import { EpisodiosService } from './services/episodios-service/episodios.service';
import { HttpModule } from '@angular/http';
import { PeliculasService } from './services/peliculas-service/peliculas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas';
import { PeliculasDetalleComponent } from './peliculas-detalle/peliculas-detalle';
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';
import { FormatosService } from './services/formatos-service/formatos.service';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';
// import { MensajesComponent } from './mensajes/mensajes.component';
// import { MenuComponent } from './core/shell/menu/menu.component'; import {MatTableModule} from '@angular/material/table';
import {DataTableModule} from 'angular-6-datatable';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ProductorasService } from './services/productoras-service/productoras.service';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculasDetalleComponent,
    EditEpisodeComponent,
    EditarPeliculaComponent,
    PruebasComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng2Accordion,
    AppRoutingModule,
    CoreModule,
    DataTableModule,
    EditorModule,
  ],
  providers: [
    PeliculasService,
    EpisodiosService,
    FormatosService,
    ProductorasService,
    TiposPeliculasService,
    GenerosService,
    EstadosService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
