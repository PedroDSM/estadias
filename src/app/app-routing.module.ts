import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/Diseños/inicio/inicio.component';
import { LoginComponent } from './componentes/Formularios/login/login.component';
import { RegistroComponent } from './componentes/Formularios/registro/registro.component';
import { CategoriasComponent } from './componentes/Vistas/categorias/categorias.component';
import { RolesComponent } from './componentes/Usuarios/roles/roles.component';
import { UsersComponent } from './componentes/Usuarios/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component:LoginComponent},
  { path: 'Registro', component:RegistroComponent},
  { path: 'Inicio', component:InicioComponent},
  { path: 'Categorias', component:CategoriasComponent},
  { path: 'Roles', component:RolesComponent},
  { path: 'Users', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
