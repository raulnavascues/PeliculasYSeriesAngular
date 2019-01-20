import { PeliculasDetalleComponent } from './peliculas-detalle/peliculas-detalle';
import { PeliculasComponent } from './peliculas/peliculas';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home';

// import { RegisterComponent } from './register';
// import { AuthGuard } from './_guards';


const appRoutes: Routes = [
    { path: '', component: PeliculasComponent}, // , canActivate: [AuthGuard] },
    { path: '', component: PeliculasDetalleComponent},
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
