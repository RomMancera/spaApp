import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { EstrellasComponent } from './components/estrellas/estrellas.component';
import { HomeComponent } from './components/home/home.component';
import { PlanetaComponent } from './components/planeta/planeta.component';


const APP_ROUTES: Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'planeta/:id', component: PlanetaComponent },
    { path: 'estrellas', component: EstrellasComponent },

    { path: '**', pathMatch: 'full', redirectTo:'home' },
]

export const ROUTING =RouterModule.forRoot(APP_ROUTES);