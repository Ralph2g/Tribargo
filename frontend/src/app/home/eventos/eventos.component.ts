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
  public bares:Array<Bar>
  public baresBuenos:Array<Bar>
  ngOnInit() {
    this.getSugerences();

    
    }
    //obtenemos los bares a mostrar
    public getSugerences(){
      this._baresService.getData().then(
        (result:any) => {
          this.bares = result.bares;
          console.log("Hola desde eventos ");
          console.log(result.bares);
            this.rellenarSugerencias(this.bares)     
        },error => {
          console.log("Error");
          console.log(<any>error);
        },
      )
    }
    //rellenamos los mark


  constructor(
    private _baresService:BaresApiService
  ) {
    this.bares = [];
    this.baresBuenos=[];
    this.sugerencias = [
      {
        id:123123,
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

  public rellenarSugerencias(bares){


    for(let i=0; i<3;i++){
      let Aleatorio = Math.floor(Math.random()*(bares.length +1))
      this.baresBuenos.push(bares[Aleatorio])
    }

    for(let i=0; i<3;i++){
      this.sugerencias[i].id= this.baresBuenos[i]._id
      this.sugerencias[i].nombre= this.baresBuenos[i].nombre
      this.sugerencias[i].puntuacion= this.baresBuenos[i].puntuacion
      this.sugerencias[i].costo= this.baresBuenos[i].costo
      this.sugerencias[i].productos= this.baresBuenos[i].bebidas
      this.sugerencias[i].musica= this.baresBuenos[i].musica
      this.sugerencias[i].ubicacion= this.baresBuenos[i].ubicacion
      this.sugerencias[i].descripcion= this.baresBuenos[i].descripcion
      }
  }


}
