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
    path: 'peliculas-detalle',
    component: PeliculasDetalleComponent
  },
  {
    path: 'edit-episode',
    component: EditEpisodeComponent
  },
  {
    path: 'editar-pelicula',
    component: EditarPeliculaComponent
  },
  {
    path: 'not-found',
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
