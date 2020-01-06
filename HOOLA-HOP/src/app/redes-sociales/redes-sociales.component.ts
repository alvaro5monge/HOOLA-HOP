import { Component, OnInit } from '@angular/core';
import { RedSocial } from '../dominio/Redes/red-social';
import { RedesSocialesService } from '../servicio/redes-sociales.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {

  lista:RedSocial[]=[];
  constructor(servicioSocial: RedesSocialesService) { }

  ngOnInit() {
  }

}
