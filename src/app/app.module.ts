import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { Ng2Accordion } from 'ng2-native-accordion';
import { EpisodiosService } from './episodios-service/episodios.service';
import { HttpModule } from '@angular/http';
import { PeliculasService } from './peliculas-service/peliculas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas';
// import { FooterComponent } from './footer/footer.component';
import { PeliculasDetalleComponent } from './peliculas-detalle/peliculas-detalle';
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';
import { FormatosService } from './formatos-service/formatos.service';
// import { MensajesComponent } from './mensajes/mensajes.component';
// import { NotFoundComponent } from './core/not-found/not-found.component';
// import { MenuComponent } from './core/shell/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    // FooterComponent,
    PeliculasDetalleComponent,
    EditEpisodeComponent,
    // MenuComponent,
    // MensajesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng2Accordion,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    PeliculasService,
    EpisodiosService,
    FormatosService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
