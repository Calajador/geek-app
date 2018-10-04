import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../../interfaces/articulo.interface';
import { InformaticaService } from '../../../services/informatica.service';
import { AutentificacionService } from '../../../services/autentificacion.service';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css']
})
export class InformaticaComponent implements OnInit {


  articulos: Articulo [] = [];

  constructor( public _infor: InformaticaService, private _authS: AutentificacionService) {

    this.articulos = this._infor.articulos;
  }

  ngOnInit() {
  }

  isAuth() {
    return this._authS.estaLogeado();
  }

}
