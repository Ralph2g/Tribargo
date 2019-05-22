import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module'

@NgModule({
  declarations: [

                ],
  imports: [
    CommonModule,
    FormsModule, 
    HomeRoutingModule,
    HttpClientModule    
  ],
  providers: [HomeRoutingModule]
})
export class AuthModule { }
