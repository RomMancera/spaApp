import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';


@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  plan : any = {};
  ocultar : string;
  color : string;
  tamanio : string;
  tipo : string ;

  constructor( private actRoute: ActivatedRoute,
               private planeService:  ServicioService ) {

    this.actRoute.params.subscribe(
      params => {
        console.log(params.id);
        this.plan = this.planeService.obtenerPlaneta(params.id);
        console.log(this.plan);
      }
    )

   }

  ngOnInit(): void {
  }

}
