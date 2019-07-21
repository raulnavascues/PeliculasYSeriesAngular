import { PruebasComponent } from './pruebas/pruebas.component';
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';
import { PeliculasDetalleComponent } from './peliculas-detalle/peliculas-detalle';
import { PeliculasComponent } from './peliculas/peliculas';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';

const routes: Routes = [
  {
    path: '',
    component: PeliculasComponent
  },
  {
    path: 'peliculas-detalle.html',
    component: PeliculasDetalleComponent
  },
  {
    path: 'edit-episode.html',
    component: EditEpisodeComponent
  },
  {
    path: 'editar-pelicula.html',
    component: EditarPeliculaComponent
  },
  {
    path: 'anadir-pelicula.html',
    component: EditarPeliculaComponent
  },
  {
    path: 'not-found.html',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
