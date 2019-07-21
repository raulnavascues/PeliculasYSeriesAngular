import { EditarPeliculaComponent } from './../../../editar-pelicula/editar-pelicula.component';
import { MainComponent } from './../main/main.component';
import { Mensaje } from './../../../shared/Mensaje';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  public msg: Mensaje;

  constructor() {

    // this.msg = EditarPeliculaComponent.getMensajes();
   }

  ngOnInit() {
  }

}
