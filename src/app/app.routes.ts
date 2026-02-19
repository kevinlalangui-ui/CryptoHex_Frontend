import { Routes } from '@angular/router';

export const routes: Routes = [
  //Página con footer y header
  {
    path: '',
    loadComponent:()=> import("./layouts/main-layout/main-layout").then(c=>c.MainLayout),
    children:[
      {path:'',loadComponent:()=>import("./features/pagina-principal/pagina-principal").then(c=>c.PaginaPrincipal) },
      // {path:'',loadComponent:()=>import("./features/pagina-principal/pagina-principal").then(c=>c.PaginaPrincipal) },  aqui debemos poner los airdrops, mirar tabmine router outlet
    ]
  },
  //Página sin footer ni header
  {
    path:'register',
    loadComponent:()=>import("./features/register/register").then(c=>c.Register)
  },
  {
    path:'airdrops',
    loadComponent:()=>import("./features/airdrops/airdrops").then(c=>c.Airdrops)
  },
];
