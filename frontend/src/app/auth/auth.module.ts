import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';
import { GustosUsuarioComponent } from './gustos-usuario/gustos-usuario.component';
@NgModule({
  declarations: [RegisterComponent, LoginComponent, GustosUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule, 
    AuthRoutingModule,
    HttpClientModule    
  ],
  providers: [AuthService]
})
export class AuthModule { }
