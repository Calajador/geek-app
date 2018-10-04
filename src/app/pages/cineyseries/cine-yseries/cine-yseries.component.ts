import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../../interfaces/articulo.interface';
import { CineYseriService } from '../../../services/cine-yseri.service';
import { AutentificacionService } from '../../../services/autentificacion.service';

@Component({
  selector: 'app-cine-yseries',
  templateUrl: './cine-yseries.component.html',
  styleUrls: ['./cine-yseries.component.css']
})
export class CineYseriesComponent implements OnInit {

  articulos: Articulo [] = [];

  constructor( public _cineyser: CineYseriService, private _authS: AutentificacionService) {

    this.articulos = this._cineyser.articulos;
   }

  ngOnInit() {
  }

  isAuth() {
    return this._authS.estaLogeado();
  }

}
