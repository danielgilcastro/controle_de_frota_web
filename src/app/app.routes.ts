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
    },

    {
        path: 'contato',
        loadComponent: () => import('./pages/contato/contato.component').then(c => c.ContatoComponent)
    },

    {
        path: 'criar-conta',
        loadComponent: () => import('./pages/criar-conta/criar-conta.component').then(c => c.CriarContaComponent)
    },

    {
        path: 'construcao',
        loadComponent: () => import('./pages/construcao-pages/construcao-pages.component').then(c => c.ConstrucaoPagesComponent)
    },
    
    {
        path: '404',
        loadComponent: () => import('./pages/tela-erro404/tela-erro404.component').then(c => c.TelaErro404Component)
    },




];
