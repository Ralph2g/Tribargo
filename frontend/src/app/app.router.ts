import { Routes } from '@angular/router';
import { NoPageRoutes } from './no-page/no-page.routes';
import { HomeRoutes } from './home/home.router';
import { AuthRoutes } from './auth/auth.router';


export const routes: Routes = [
    ...HomeRoutes,
    ...AuthRoutes,
    ...NoPageRoutes,
];
