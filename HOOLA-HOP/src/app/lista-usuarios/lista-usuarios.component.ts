import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicio/usuarios.service';
import { Usuario } from '../dominio/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarioNuevo:Usuario;
  lista:Usuario[]=[];
  constructor(public servicio:UsuariosService) { 
    
  }

  ngOnInit() {
    this.servicio.buscarTodos().subscribe((lista)=>{
      console.log("hecho");
      
      this.lista = lista;
    });
  }

  borrar(usuario: Usuario){
    this.servicio.borrar(usuario);
  }
  

}
