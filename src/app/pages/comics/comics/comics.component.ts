import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../../interfaces/articulo.interface';
import { ComicsService } from '../../../services/comics.service';
import { AutentificacionService } from '../../../services/autentificacion.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  articulos: Articulo [] = [];

  constructor( public _comics: ComicsService, private _authS: AutentificacionService) {

    this.articulos = this._comics.articulos;
   }

  ngOnInit() {
  }

  isAuth() {
    return this._authS.estaLogeado();
  }

}
