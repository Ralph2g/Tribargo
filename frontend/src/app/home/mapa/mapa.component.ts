import { Component, OnInit } from '@angular/core';
//importamos modelos
import { Marker } from 'src/app/models/marker';
import { Bar } from '../../models/bar'

import { BaresApiService } from 'src/app/services/bares-api.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  providers:[BaresApiService],
})
export class MapaComponent implements OnInit {
  
  //Primero configuramos el texto de nuestros marcadores
  public labelOptions = {
      color: '#ee4646',
      fontFamily: '',
      fontSize: '10px',
      fontWeight: 'bold',
      letterSpacing:'0.5px',
      text: 'Plan Pagado/No pagado'
    }
  
    public iconMap = {
      iconUrl:'http://localhost:4200/assets/images/icons/beer-icon.png',
    }
  //declaramos el objeto bar que es el que nos reguesa la base de datos
    public bares:Array<Bar>
  
  //Atributos del mapa
  public marker:Marker;
  public markers:Array<Object>;
  public latitude:number;
  public longitude:number;
  public zoom:number;

    constructor(
      private _baresService:BaresApiService
    ) {
      //intanciamos nuestras clases
      this.marker = new Marker;
      this.markers =[];
      this.bares = [];
    }
    
    ngOnInit() {
    //Llamamos al servicio de bares para obtenerlos de la base
      this._baresService.getData().then(
        (result:any) => {
          this.bares = result.data;
        },error => {
          console.log("Error");
          console.log(<any>error);
          
          
        }
        )


    
    this.latitude = 19.433869;
    this.longitude = -99.138893;
    this.zoom = 21;
    this.rellenarMarkers();
    console.log(this.markers);
    


    
  }

  public rellenarMarkers(){

    this.markers =[
    {
      id:234,
      title: 'Mr Duck',
      lat: 19.434075,
      lng: -99.138834,
      opacity: .5,
      infow: 'Bar juvenil con exelentes precios y alberca',
      
    },
    {
      id:765,
      title: 'Rock-Zone',
      lat: 19.433895,
      lng:  -99.138806,
      opacity: .8,
      infow: 'Bar con música en vivo y exelente ambiente',
    },
    {
      id:199293,
      title: 'Terraza Madero',
      lat: 19.4340345,
      lng: -99.1389304,
      opacity: .5,
      infow: 'El mejor lugar para conocer gente nueva y estar con tus amigos',
    },
  ]
    
  }


}
