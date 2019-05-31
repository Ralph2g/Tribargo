import { Component, OnInit } from '@angular/core';
import { Bar } from 'src/app/models/bar';
import { BaresApiService } from 'src/app/services/bares-api.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  public sugerencias:Array<any>;

  
  ngOnInit() {
    this.getSugerences();
    
  }

  public getSugerences(){
    
  }

  constructor(
    private _baresService:BaresApiService
  ) {

    this.sugerencias = [
      {
        _id:123123,
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
        id:4655464,
        nombre:'Madero',
        productos:['tarro','misil','snacks'],
        musica:['Bachata','Rock','regueton'],
        ubicacion:'Valle de mexico 27 colonia Valle dorado, oaxaca',
        descripcion: 'El mejor bar para pasaar tu tiempo libre',
        puntuacion: 4,
        costo:200
      },
      {
        id:987668,
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


}
