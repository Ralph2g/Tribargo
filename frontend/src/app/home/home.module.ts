import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos/eventos.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { MusicaComponent } from './musica/musica.component';
import { RouterModule } from '@angular/router';

//Google maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [ EventosComponent, SugerenciaComponent, PromocionesComponent, MusicaComponent,],
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpoMy4yVwTdPHUwZy8xN7AbGH5lZOsm1A'
    })
  ]
})
export class HomeModule { }
