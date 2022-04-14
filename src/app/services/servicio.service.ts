import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  servicio: any []=
  [
    {
      nombre: "mercurio",
      posicion: "Primero",
      img: "assets/img/Mercurio.jpg",
      aceleracion: "3,70 m/s2" ,
      colores: " gris oscuro, roto por cráteres, grandes y pequeños",
      caracteristicas:"Planeta que orbita mas cerca del sol y el mas pequeño de todos los planetas y es parte de los planetas rocosos "
    },
    {
      nombre: "venus",
      posicion: "Segundo",
      img: "assets/img/venus.jpg",
      aceleracion: "8,85 m/s2 " ,
      colores: "color amarillento",
      caracteristicas:"Planeta que orbida en segunda posicion despues de mercurio e igual es parte del grupo deplanetas rocosos"
    },
    {
      nombre: "tierra",
      posicion: "Tercera",
      img: "assets/img/Tierra.jpg",
      aceleracion: "9.81 m/s2" ,
      colores: "Los océanos azules dominan la tierra, extensas áreas de verde bosque, marrones montañas, lisos desiertos, y hielo blanco completan el rostro del mundo.",
      caracteristicas:"Planeta que orbita en la tercera posicion despues de venus y antes que marte, pertenece al grupo de planetas rocosos"
    },
    {
      nombre: "marte",
      posicion: "Cuarto",
      img: "assets/img/Marte.jpeg",
      aceleracion: "3,72 m/s2" ,
      colores: " tono rojizo ",
      caracteristicas:"Planeta que orbita en la posicion cuarta y que esta desoues de a tierra y antes del cinturon de asteroides, pertenece al grupo de los planetas rocosos"
    },
    {
      nombre: "jupiter",
      posicion: "Quinto",
      img: "assets/img/Jupiter.jpg",
      aceleracion: "26,39 m/s2" ,
      colores: "color pálido",
      caracteristicas:"Plantea que orbita en la quinta posicion, el mas gandre de todos los planetas, pertenece al grupo de los planetas gaseosos"
    },
   
    {
       nombre: "saturno",
      posicion: "Sexto",
      img: "assets/img/Saturno.jpg",
      aceleracion: "11,67 m/s2" ,
      colores: "color natural es de un amarillo pálido",
      caracteristicas:"Planeta que orbita en la sexta posicion, planeta con los anillos mas grandes y notables, forma parte del grupo de los planetas gaseosos"
    },
    {
      nombre: "urano",
      posicion: "Septimo",
      img: "assets/img/Urano.jpg",
      aceleracion: "11,43 m/s2" ,
      colores: "color verde",
      caracteristicas:"Planeta que orbita en la septima posicion, miembro del grupo de los planetas gaseosos despues de saturno"
    },
   {
       nombre: "neptuno",
      posicion: "Octavo",
      img: "assets/img/Neptuno.jpg",
      aceleracion: "11,07 m/s2" ,
      colores: "color azul",
      caracteristicas:"Planeta que orbita en la octava posicion, ultimo planeta sin contar a pluton, forma parte del grupo de los planetas gaseosos"
    }
  ];


  constructor() { 
    console.log("I am using my first service");
  }

  obtenerPlanetas(){
    return this.servicio;
  }

  obtenerPlaneta(idx: number){
   return this.servicio[idx];
  }

}
