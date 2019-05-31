import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BaresApiService } from 'src/app/services/bares-api.service';
import { Bar } from 'src/app/models/bar';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {
  public iconMap = {
    iconUrl:'http://localhost:4200/assets/images/icons/beer-icon.png',
  }
  public bar:Bar;
  public id:number;//id del bar para sacarlo de la base datos
  public name:string;
  public score:number;//puntuacion
  public price:number;//precio
  public image:File;//imagen
  public drinks:Array<string>;//array de bebidas
  public snacks:Array<string>;//array de SNACKS
  public music:Array<string>;//array de MUSICA
  public description:string;//descripcion larga del bar
  public promos:Array<string>;//array de PROMOS
  public location:string;//localización en string
  public latitude:number;//latitud en el mapa
  public longitude:number;//longitud en el mapa

  constructor(
    public _route:ActivatedRoute,
    private _router:Router,
    private _baresService:BaresApiService,

  ) { 
    this.bar = new Bar;
  }

  ngOnInit() {

    this._route.params.forEach((params: Params) =>{
    let id = params['id'];  
    this.id = id;

    this.getBar(this.id);
    console.log(this.bar);
    
    });

        

    this.name = 'Terraza-Madero';
    this.latitude = 19.433869;
    this.longitude = -99.138893;
    this.score = 4;
    this.price = 150;
    this.image = null;
    this.drinks = ['Heineken','XX','victoria'];
    this.snacks = ['Alitas','Hamburguesas', 'Papas'];
    this.music = ['Regueton', 'Banda','Salsa', 'ska'];
    this.description = 'Somos el bar más popular para pasar la tarde con tus amigos, hay de todo y a buen precio';
    this.promos = ['2x1','No-cover'];
    this.location = 'Av Francisco I. Madero 20, Centro Histórico de la Cdad. de México, Centro, 06010 Ciudad de México, CDMX';

  }

  
  public getBar(id){
    this._baresService.getBar(id).then(
      (result:any) =>{
        console.log("imprimo los bares");
        console.log(JSON.stringify(result))
        this.rellenarBar(result.bar);
      },error => {
        console.log("Error");
        console.log(<any>error);
      }
    )
  }

  




musica
  public rellenarBar(bar){
    this.bar._id = bar._id;
    this.bar.nombre = bar.nombre;
    this.bar.latitud = bar.latitud;
    this.bar.longitud = bar.longitud;
    this.bar.puntuacion = bar.puntuacion;
    this.bar.costo= bar.costo;
    this.bar.imagen = bar.imagen;
    this.bar.bebidas = bar.bebidas;
    this.bar.snacks = bar.snacks;
    this.bar.musica = bar.musica
    this.bar.descripcion = bar.descripcion;
    this.bar.promocion = bar.promocion;
    this.bar.ubicacion = bar.ubicacion;
  }

}
