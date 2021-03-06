import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BarLoginComponent } from './login/bar-login.component';
import { BarRegisterComponent } from './register/bar-register.component';
import { GustosUsuarioComponent } from './gustos-usuario/gustos-usuario.component';
import { RouterModule } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';
@NgModule({
  declarations: [
                  RegisterComponent,
                  LoginComponent,
                  BarLoginComponent,
                  BarRegisterComponent,
                  GustosUsuarioComponent,
                  FacebookComponent
                ],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule,
    RouterModule    
  ],
  providers: [AuthService]
})
export class AuthModule { }
