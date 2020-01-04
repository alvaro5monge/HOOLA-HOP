import { Injectable } from '@angular/core';
import { Usuarios } from '../dominio/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  lista:Usuarios[]=[];

  constructor() {     
    this.lista.push(new Usuarios(1,"Alvaro","Monge","Hola"));
    this.lista.push(new Usuarios(2,"Alex","Fandiño","Hola1"));
  }
    public buscarTodos(){
      return this.lista;
    }
    public borrar(usuario:Usuarios):void {

      let indice=this.lista.indexOf(usuario);
      this.lista.splice(indice,1);

    }

    public insertar(usuario:Usuarios):void {

      this.lista.push(usuario);
    }
}
