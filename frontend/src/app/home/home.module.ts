import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module'

//Modulos PErsonalizador
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
        InicioComponent,
                ],
  imports: [
    CommonModule,
    FormsModule, 
    HomeRoutingModule,
    HttpClientModule    
  ],
  providers: [HomeRoutingModule]
})
export class HomeModule { }
