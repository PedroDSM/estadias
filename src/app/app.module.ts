import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './componentes/Diseños/sidebar/sidebar.component';
import { InicioComponent } from './componentes/Diseños/inicio/inicio.component';
import { RegistroComponent } from './componentes/Formularios/registro/registro.component';
import { LoginComponent } from './componentes/Formularios/login/login.component';
import { BodyComponent } from './componentes/Diseños/body/body.component';
import { CategoriasComponent } from './componentes/Vistas/categorias/categorias.component';
import { RolesComponent } from './componentes/Usuarios/roles/roles.component';
import { UsersComponent } from './componentes/Usuarios/users/users.component';
import { RutasprotegidasComponent } from './componentes/RutasProtegidas/rutasprotegidas/rutasprotegidas.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    BodyComponent,
    CategoriasComponent,
    RolesComponent,
    UsersComponent,
    RutasprotegidasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
