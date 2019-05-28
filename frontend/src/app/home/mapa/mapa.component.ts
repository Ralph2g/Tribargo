import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/models/marker';
import { MVCObject, InfoWindow } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

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

  //Atributos del mapa
  public marker:Marker;
  public markers:Array<Object>;
  public latitude:number;
  public longitude:number;
  public zoom:number;
    constructor() {
      this.marker = new Marker;
      this.markers =[];
    }
    
    ngOnInit() {
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
