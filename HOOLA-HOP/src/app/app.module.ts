import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './servicio/usuarios.service';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { RedesSocialesService } from './servicio/redes-sociales.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    LoginComponent,
    RegistroComponent,
    RedesSocialesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient, UsuariosService, RedesSocialesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
