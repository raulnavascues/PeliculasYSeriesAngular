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
import { PeliculasComponent } from './peliculas/peliculas.component';
import { FooterComponent } from './footer/footer.component';
import { PeliculasDetalleComponent } from './peliculas-detalle/peliculas-detalle.component';
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';
import { MenuComponent } from './menu/menu.component';

const rutas: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    component: PeliculasComponent,
    children: [
      {
        path: 'detalle-pelicula',
        component: PeliculasDetalleComponent,
      },
    ]
  },
  {path: 'anadir-episodio', component: EditEpisodeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    FooterComponent,
    PeliculasDetalleComponent,
    EditEpisodeComponent,
    MenuComponent,
    /*Router,
    ActivatedRoute,*/
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng2Accordion,
    RouterModule.forRoot (rutas, { enableTracing: false }),
  ],
  providers: [
    PeliculasService,
    EpisodiosService
  ],
  // bootstrap: [ PeliculasComponent]
  bootstrap: [MenuComponent, PeliculasDetalleComponent, FooterComponent]
})
// platformBrowserDynamic().bootstrapModule(AppModule);

export class AppModule { }
