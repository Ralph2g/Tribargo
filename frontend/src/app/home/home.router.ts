//Importamos Route que es un arreglo de rutas
import { Route } from '@angular/router';
//Nustros Componentes personalizados 
import { HomeComponent } from './home.component';
import { EventosComponent } from './eventos/eventos.component';
import { MusicaComponent } from './musica/musica.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';


//componente personalizados 

export const HomeRoutes: Route[] = [
  { 
    path: '', 
    component: HomeComponent, 
    children: [
      { path: '', component: EventosComponent },
      { path: 'musica', component: MusicaComponent },
      { path: 'promociones', component: PromocionesComponent },
      { path: 'sugerencia', component: SugerenciaComponent },
      
  ]},
    
];

