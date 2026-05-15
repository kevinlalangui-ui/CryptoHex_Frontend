import { Routes } from '@angular/router';
import {authGuard} from "./core/guards/auth/auth-guard";

export const routes: Routes = [
  //Página con footer y header
  {
    path: '',
    loadComponent:()=> import("./layouts/main-layout/main-layout").then(c=>c.MainLayout),
    children:[
      {path:'',loadComponent:()=>import("./features/pagina-principal/pagina-principal").then(c=>c.PaginaPrincipal) },
    ]
  },
  //Página sin footer ni header
  {
    path:'register',
    loadComponent:()=>import("./features/register/register").then(c=>c.Register)
  },
  {
    path:'airdrops',
    loadComponent:()=>import("./layouts/airdrops-layout/airdrops-layout").then(c=>c.AirdropsLayout),
    children:[
      {path: '',loadComponent:()=>import("./features/airdrops/airdrops").then(c=>c.Airdrops) },
    ]
  },
  {
    path:'overview',
    loadComponent:()=>import("./layouts/graficos-layout/graficos").then(c=>c.Graficos) ,
    canActivate: [authGuard],// la guard

  },
  {
    path:'profile',
    loadComponent:()=>import("./features/profile/profile").then(c=>c.Profile),
    canActivate: [authGuard],
  },
  {
    path:'tweets',
    loadComponent:()=>import("./features/trending-insights/trending-insights").then(c=>c.TrendingInsights) ,
    canActivate: [authGuard],// la guard
  },
  {path:'**',redirectTo:'page-not-found',pathMatch:'full'},
  {
    path:'page-not-found',
    loadComponent: () => import("./features/not-found/not-found-404/not-found-404").then(c => c.NotFound404)
  }
];
