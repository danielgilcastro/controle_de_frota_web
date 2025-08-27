import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path:"",
        loadComponent: () => import('./home-page/home-page.component').then(c => c.HomePageComponent)
    },

];
