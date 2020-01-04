import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicio/usuarios.service';
import { Usuarios } from '../dominio/usuarios';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  lista:Usuarios[]=[];
  constructor(public servicio:UsuariosService) { 
    this.lista=servicio.buscarTodos();
  }

  ngOnInit() {
  }

}
