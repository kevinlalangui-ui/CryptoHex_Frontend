import { Routes } from '@angular/router';

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
];
