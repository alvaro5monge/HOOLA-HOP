import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';


const routes: Routes = [
  { path: "lista", component: ListaUsuariosComponent },
  {path:"login", component: LoginComponent  },
  {path:"registro", component: RegistroComponent  },
  {path:"redSocial", component: RedesSocialesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
