import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendComponent } from './trend/trend.component';
import { EventosComponent } from './eventos/eventos.component';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [TrendComponent, EventosComponent, MapaComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
