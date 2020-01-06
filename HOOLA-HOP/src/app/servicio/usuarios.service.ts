import { Injectable } from '@angular/core';
import { Usuario } from '../dominio/usuario';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  lista:Usuario[]=[];

  constructor(private http: HttpClient ) {     
    this.lista.push(new Usuario(1,"Alvaro","Monge","Bilbo","ala@gamil.com","Hola"));
    this.lista.push(new Usuario(2,"Alex","Fandiño","Bilbo","a@gamil.com","Hola1"));
  }
    public buscarTodos(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>("http://localhost:3000/listaUsuarios");
    }
    public borrar(usuario:Usuario):void {

      let indice=this.lista.indexOf(usuario);
      this.lista.splice(indice,1);

    }

    public insertar(usuario:Usuario): Observable<Usuario> {

      return this.http.post<Usuario>("http://localhost:3000/crearUsuario", usuario)
    }
}
