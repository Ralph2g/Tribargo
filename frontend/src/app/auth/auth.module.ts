import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from '../services/auth.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BarLoginComponent } from './login/bar-login.component';
import { BarRegisterComponent } from './register/bar-register.component';

@NgModule({
  declarations: [
                  RegisterComponent,
                  LoginComponent,
                  BarLoginComponent,
                  BarRegisterComponent,
                ],
  imports: [
    CommonModule,
    FormsModule, 
    AuthRoutingModule,
    HttpClientModule    
  ],
  providers: [AuthService]
})
export class AuthModule { }