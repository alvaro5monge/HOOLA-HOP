import { Component, OnInit } from '@angular/core';
import { Usuario } from '../dominio/usuario';
import { UsuariosService } from '../servicio/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  lista=[];
  usuarioNuevo:Usuario;
  password2: string;
  constructor(public servicio:UsuariosService, private router: Router) { 
    this.usuarioNuevo=new Usuario(3,"","","","","")
  }

  ngOnInit() {
  }
  public insertar(usuario:Usuario):void {
    this.servicio.insertar(usuario).subscribe((datos)=>{
      
      this.router.navigateByUrl("lista");
      
    });

  }
}
