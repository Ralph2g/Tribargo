import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {

  public tops;
  constructor() {
    this.tops = [
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
    ];
   }

  ngOnInit() {
  }

}
