import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Modulos PErsonalizador
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
    { 
        path:'home', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
