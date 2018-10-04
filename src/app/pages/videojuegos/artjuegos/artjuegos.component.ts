import { Component, OnInit } from '@angular/core';
import { VideojuegosService } from '../../../services/videojuegos.service';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../../../interfaces/articulo.interface';

@Component({
  selector: 'app-artjuegos',
  templateUrl: './artjuegos.component.html',
  styleUrls: ['./artjuegos.component.css']
})
export class ArtjuegosComponent implements OnInit {

  articulo: Articulo;

  constructor( public _juegoS: VideojuegosService, private _acroute: ActivatedRoute) { }

  ngOnInit() {

    this._acroute.params.subscribe( parametros => {

      console.log(parametros);
      this._juegoS.getArticulo(parametros['id'])
          .subscribe( (articulo: any) => {
            this.articulo = articulo;
            console.log(this.articulo);
          });
    });
  }

}
