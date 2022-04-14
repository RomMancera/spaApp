import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import {ROUTING} from './app.routes';

//servicio
import { ServicioService } from './services/servicio.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EstrellasComponent } from './components/estrellas/estrellas.component';
import { AboutComponent } from './components/about/about.component';
import { PlanetaComponent } from './components/planeta/planeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EstrellasComponent,
    AboutComponent,
    PlanetaComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
  ],
  providers: [
   ServicioService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
