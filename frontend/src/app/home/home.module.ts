import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos/eventos.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { MusicaComponent } from './musica/musica.component';


@NgModule({
  declarations: [ EventosComponent, SugerenciaComponent, PromocionesComponent, MusicaComponent,],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
