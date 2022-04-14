import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';



@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnInit {
  planets: any[] = [];

  constructor( private servis:ServicioService,
               private rutas: Router ) { }

  ngOnInit() {
    this.planets = this.servis.obtenerPlanetas();
    console.log(this.planets);
  }

verPlane(i: number){
console.log(i);
this.rutas.navigate(['/planeta', i]);

}

}
