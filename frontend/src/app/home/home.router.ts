//Importamos Route que es un arreglo de rutas
import { Route } from '@angular/router';
//Nustros Componentes personalizados 
import { HomeComponent } from './home.component';
import { EventosComponent } from './eventos/eventos.component';
import { TrendComponent } from './trend/trend.component';
import { MapaComponent } from './mapa/mapa.component';

//componente personalizados 

export const HomeRoutes: Route[] = [
  { 
    path: '', 
    component: HomeComponent, 
    children: [
      { path: '', component: EventosComponent },
      { path: 'trend', component: TrendComponent },
      { path: 'mapa', component: MapaComponent },
      
  ]},
    
];

