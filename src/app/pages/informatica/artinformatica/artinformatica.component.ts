import { Component, OnInit } from '@angular/core';
import { InformaticaService } from '../../../services/informatica.service';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../../../interfaces/articulo.interface';

@Component({
  selector: 'app-artinformatica',
  templateUrl: './artinformatica.component.html',
  styleUrls: ['./artinformatica.component.css']
})
export class ArtinformaticaComponent implements OnInit {

  articulo: Articulo;

  constructor( public _infoS: InformaticaService, private _acroute: ActivatedRoute) { }

  ngOnInit() {

    this._acroute.params.subscribe( parametros => {

      console.log(parametros);
      this._infoS.getArticulo(parametros['id'])
          .subscribe( (articulo: any) => {
            this.articulo = articulo;
            console.log(this.articulo);
          });
    });

  }

}
