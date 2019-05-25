import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  public sugerencias:Array<Object>;

  

  constructor() {

    this.sugerencias = [
      {
        nombre:'Mr. Duck',
        productos:['tarro','misil','snacks'],
        musica:['Bachata','Rock','regueton'],
        ubicacion:'Camelia Mz1, Lt7, campestre Potrero iztapalapa',
        descripcion: 'El mejor bar para pasaar tu tiempo libre',
        puntuacion: 4,
        costo:200,
        imagen:"imagen chida",
      },
      {
        nombre:'Madero',
        productos:['tarro','misil','snacks'],
        musica:['Bachata','Rock','regueton'],
        ubicacion:'Valle de mexico 27 colonia Valle dorado, oaxaca',
        descripcion: 'El mejor bar para pasaar tu tiempo libre',
        puntuacion: 4,
        costo:200
      },
      {
        nombre:'Nock-Down',
        puntuacion: 4,
        costo:200,
        productos:['tarro','misil','snacks'],
        musica:['Bachata','Rock','regueton'],
        ubicacion:'Camelia Mz1, Lt7, campestre Potrero iztapalapa',
        descripcion: 'El mejor bar para pasaar tu tiempo libre',
      }
    ]
  }

  ngOnInit() {
    console.log("El costo de este lugar en promedio es:"+this.sugerencias[0].costo )
  }

}
