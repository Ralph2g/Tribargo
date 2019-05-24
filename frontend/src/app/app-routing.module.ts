import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
const routes: Routes = [
  { 
      path: '', component: AppComponent,
      children:[
        { path:'auth', loadChildren: './auth/auth.module#AuthModule'},
        { path:'home', loadChildren: './home/home.module#HomeModule'},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
