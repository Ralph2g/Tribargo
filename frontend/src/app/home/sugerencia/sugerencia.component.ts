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

  public opacity:any

  //
  public stars:Array<number>
  //bebidas
  public cerveza:boolean;
  public vino:boolean;
  public whisky:boolean;
  //snacks
  public alitas:boolean;
  public hamburguesa:boolean;
  public papas:boolean;
  //promos
  public dosporuno:boolean;
  public cumpleanhos:boolean;
  public chicas:boolean;
  public promociones:boolean;


  constructor(
    public _route:ActivatedRoute,
    private _router:Router,
    private _baresService:BaresApiService,

  ) { 
    this.bar = new Bar;
    this.stars =[];
     //bebidas
    this.cerveza = null;
    this.vino = null;
    this.whisky = null;
  //snacks
    this.alitas = null;
    this.hamburguesa = null;
    this.papas = null;
    this.whisky = null;
  //snacks
  //promos
    this.dosporuno = null;
    this.cumpleanhos = null;
    this.chicas = null;
    this.promociones = null;

  }

  ngOnInit() {

    this._route.params.forEach((params: Params) =>{
    let id = params['id'];  
    this.id = id;
    this.getBar(this.id);
    });

    this.opacity = this.bar.puntuacion;
    this.opacity*2


  }

  
  public getBar(id){
    this._baresService.getBar(id).then(
      (result:any) =>{
        console.log(JSON.stringify(result))
        this.rellenarBar(result.bar);
        this.stars = []
        this.llenarStars()
        this.compruebaPromos()
      },error => {
        console.log("Error");
        console.log(<any>error);
      }
    )
  }


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

  llenarStars(){
    for (let i= 0; i< this.bar.puntuacion; i++)
    this.stars.push(1);
    
  }

public compruebaPromos(){
  this.vino = this.bar.bebidas.includes( 'vino' );
  this.cerveza = this.bar.bebidas.includes( 'cerveza' );
  this.whisky = this.bar.bebidas.includes( 'whisky' );
  this.dosporuno = this.bar.promocion.includes( '2x1' );
  this.chicas = this.bar.promocion.includes( 'chicas_gratis' );
  this.cumpleanhos = this.bar.promocion.includes( 'cumpleanhero' );
  this.promociones = this.bar.promocion.includes( 'sin_cover' );
  this.alitas = this.bar.snacks.includes( 'alitas' );
  this.hamburguesa = this.bar.snacks.includes( 'Hamburguesas' );
  this.papas = this.bar.snacks.includes( 'Papas' );
}
}
