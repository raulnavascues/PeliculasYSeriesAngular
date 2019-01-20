import { Routes, RouterModule } from '@angular/router';
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
import { FooterComponent } from './footer/footer.component';
import { PeliculasDetalleComponent } from './peliculas-detalle/peliculas-detalle';
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';
import { MenuComponent } from './menu/menu.component';
import { FormatosService } from './formatos-service/formatos.service';
import { MensajesComponent } from './mensajes/mensajes.component';

const appRoutes: Routes = [
  { path: 'peliculas', component: PeliculasComponent}, // , canActivate: [AuthGuard] },
  { path: 'peliculas-detalle/', component: PeliculasDetalleComponent}, // , redirectTo: './peliculas-detalle/peliculas-detalle'},
  { path: '' , redirectTo: 'peliculas-detalle/peliculas-detalle', pathMatch: 'full'},
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];



@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    FooterComponent,
    PeliculasDetalleComponent,
    EditEpisodeComponent,
    MenuComponent,
    MensajesComponent,
    /*Router,
    ActivatedRoute,*/
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng2Accordion,
  ],
  providers: [
    PeliculasService,
    EpisodiosService,
    FormatosService
  ],
  bootstrap: [MenuComponent, FooterComponent]
  // bootstrap: [MenuComponent,  EditEpisodeComponent, FooterComponent]
})
// platformBrowserDynamic().bootstrapModule(AppModule);

export class AppModule { }
