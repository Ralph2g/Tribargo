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
    this.getBars();
    this.rellenarMarkers();
    console.log(this.markers);
  }
  //obtenemos los bares a mostrar
  public getBars(){
    this._baresService.getData().then(
      (result:any) => {
        this.bares = result.bares;
      },error => {
        console.log("Error");
        console.log(<any>error);
      },
    )
  }
  //rellenamos los markers de los bares en la vista;
  public rellenarMarkers(){

    this.bares.forEach( bar =>{
      this.marker.infow = bar.infow;
      this.marker.lat = bar.latitud;
      this.marker.lng = bar.longitud;
      this.marker.opacity = bar.puntuacion;
      this.marker.title = bar.nombre;
      this.markers.push(this.marker);
      this.marker = null;
    });
  }


}
