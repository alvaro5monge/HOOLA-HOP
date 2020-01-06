import { Injectable } from '@angular/core';
import { RedSocial } from '../dominio/Redes/red-social';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialesService {

  lista:RedSocial[]=[];

  constructor(private http: HttpClient ) {     
    this.lista.push(new RedSocial(0,"Instagram",14000000,"D:\GIT\Proyectos\HOOLA-HOP\HOOLA-HOP\src\assets\images\insta.png"));
    this.lista.push(new RedSocial(1,"Twitter",20000000,"D:\GIT\Proyectos\HOOLA-HOP\HOOLA-HOP\src\assets\images\twitter.png"));
  }
    public buscarTodos(): Observable<RedSocial[]>{
      return this.http.get<RedSocial[]>("http://localhost:3000/redesSociales");
    }
    public borrar(red:RedSocial):void {

      let indice=this.lista.indexOf(red);
      this.lista.splice(indice,1);

    }

    public insertar(red:RedSocial): Observable<RedSocial> {

      return this.http.post<RedSocial>("http://localhost:3000/crearRedSocial", red)
    }
}

