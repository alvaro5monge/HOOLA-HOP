import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../dominio/usuarios';
import { UsuariosService } from '../servicio/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  lista=[];
  usuarioNuevo:Usuarios;
  constructor(public servicio:UsuariosService) { 
    this.usuarioNuevo=new Usuarios(3,"","","","","","")
  }

  ngOnInit() {
  }
  public insertar(usuario:Usuarios):void {
    this.servicio.insertar(usuario);
  }
}
