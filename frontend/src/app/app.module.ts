//Modulos de app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { RouterModule } from '@angular/router' //Modulo importado para el lazy page
import { AppRoutingModule } from './app-routing.module';
//servicios
import { AuthService } from './services/auth.service';
//routing personalizado
import { routes } from './app.router';
//Modulos personalizados
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AuthComponent } from './auth/auth.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    NoPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    AuthModule,
    RouterModule.forRoot (routes)
  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
