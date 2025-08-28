import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        redirectTo: 'tela-inicial',
        pathMatch: 'full'
    },
    {
        path:"tela-inicial",
        loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent),
        loadChildren: () => import('./features/features.routes').then(m => m.routes)
    },

    {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page.component').then(c => c.LoginPageComponent)
    }

];
