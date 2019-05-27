import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

//componente personalizados 
import { BarRegisterComponent } from './register/bar-register.component';
import { RegisterComponent } from './register/register.component';
import { BarLoginComponent } from './login/bar-login.component';
import { GustosUsuarioComponent } from './gustos-usuario/gustos-usuario.component';
import { GustosInicialesUsuarioComponent } from './gustos-iniciales-usuario/gustos-iniciales-usuario.component';
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'user-register', component: RegisterComponent },
  { path: 'bar-register', component: BarRegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'bar-login', component: BarLoginComponent},
  { path: 'gustos-usuario', component: GustosUsuarioComponent},
  { path: 'gustos-iniciales-usuario', component: GustosInicialesUsuarioComponent}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
