import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../../interfaces/articulo.interface';
import { OpinionService } from '../../../services/opinion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artopinion',
  templateUrl: './artopinion.component.html',
  styleUrls: ['./artopinion.component.css']
})
export class ArtopinionComponent implements OnInit {
  articulo: Articulo;

  constructor(public _opinonS: OpinionService, private _acroute: ActivatedRoute) { }

  ngOnInit() {

    this._acroute.params.subscribe( parametros => {
      this._opinonS.getArticulo(parametros ['id'])
              .subscribe( (articulo: any) => {
                this.articulo = articulo;
              });
    });
  }

}
