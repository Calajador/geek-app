import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../../services/comics.service';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../../../interfaces/articulo.interface';

@Component({
  selector: 'app-artcomic',
  templateUrl: './artcomic.component.html',
  styleUrls: ['./artcomic.component.css']
})
export class ArtcomicComponent implements OnInit {
  articulo: Articulo;

  constructor( public _comicS: ComicsService, private _acroute: ActivatedRoute) { }

  ngOnInit() {

    this._acroute.params.subscribe( parametros => {

      console.log(parametros);
      this._comicS.getArticulo(parametros['id'])
          .subscribe( (articulo: any) => {
            this.articulo = articulo;
            console.log(this.articulo);
          });
    });
  }

}
