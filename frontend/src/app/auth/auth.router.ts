//Importamos Route que es un arreglo de rutas
import { Route } from '@angular/router';
//Nustros Componentes personalizados 
import { LoginComponent } from './login/login.component';
import { BarRegisterComponent } from './register/bar-register.component';
import { RegisterComponent } from './register/register.component';
import { BarLoginComponent } from './login/bar-login.component';
import { GustosUsuarioComponent } from './gustos-usuario/gustos-usuario.component';
import { AuthComponent } from './auth.component';

export const AuthRoutes: Route[] = [
  { 
    path: '', 
    component: AuthComponent, 
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'user-register', component: RegisterComponent },
      { path: 'bar-register', component: BarRegisterComponent },
      { path: 'bar-login', component: BarLoginComponent},
      { path: 'gustos-usuario', component: GustosUsuarioComponent}
  ]
}  
];
