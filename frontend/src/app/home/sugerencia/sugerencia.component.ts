import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {

  public id:number;//id del bar para sacarlo de la base datos
  public score:number;//puntuacion
  public price:number;//precio
  public image:File;//imagen
  public drinks:Array<string>;//array de bebidas
  public snaks:Array<string>;//array de SNACKS
  public music:Array<string>;//array de MUSICA
  public description:string;//descripcion larga del bar
  public promos:Array<string>;//array de PROMOS
  public location:string;//localización en string
  public latitude:number;//latitud en el mapa
  public longitude:number;//longitud en el mapa

  constructor(
    public _route:ActivatedRoute,
    private _router:Router,

  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) =>{
      let id =params['id'];  
      this.id = id;
      
    });
  }

}
