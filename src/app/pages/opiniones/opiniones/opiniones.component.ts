import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../../interfaces/articulo.interface';
import { OpinionService } from '../../../services/opinion.service';
import { AutentificacionService } from '../../../services/autentificacion.service';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {
  articulos: Articulo [] = [];

  constructor( public _opnionS: OpinionService, private _authS: AutentificacionService) {
    this.articulos = this._opnionS.articulos;
  }

  ngOnInit() {
  }

  isAuth() {
    return this._authS.estaLogeado();
  }

}
