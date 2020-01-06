import { Component, OnInit } from '@angular/core';
import { RedSocial } from '../dominio/Redes/red-social';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {

  lista:RedSocial[]=[];
  constructor(servicioSocial:RedesSocialesComponent) { }

  ngOnInit() {
  }

}
