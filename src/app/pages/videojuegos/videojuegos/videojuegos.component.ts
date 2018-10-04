import { Component, OnInit } from '@angular/core';
import { VideojuegosService } from '../../../services/videojuegos.service';
import { Articulo } from '../../../interfaces/articulo.interface';
import { AutentificacionService } from '../../../services/autentificacion.service';


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  articulos: Articulo [] = [];

  constructor( public _juegoS: VideojuegosService, private _authS: AutentificacionService) {
    // this._juegoS.getArticulos()
    //     .subscribe(articulos => {

    //       // tslint:disable-next-line:forin
    //       for ( const id$ in articulos) {
    //         const p = articulos[id$];
    //         p.id$ = id$;
    //         this.articulos.push(articulos[id$]);
    //       }
    //       console.log(this.articulos);
    //     });

    this.articulos = this._juegoS.articulos;

   }

  ngOnInit() {
  }

  isAuth() {
    return this._authS.estaLogeado();
  }

}
