import { Component, OnInit } from '@angular/core';
import { CineYseriService } from '../../../services/cine-yseri.service';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../../../interfaces/articulo.interface';

@Component({
  selector: 'app-artciyser',
  templateUrl: './artciyser.component.html',
  styleUrls: ['./artciyser.component.css']
})
export class ArtciyserComponent implements OnInit {

  articulo: Articulo;

  constructor( public _cineyseS: CineYseriService, private _acroute: ActivatedRoute) { }

  ngOnInit() {

    this._acroute.params.subscribe( parametros => {

      console.log(parametros);
      this._cineyseS.getArticulo(parametros['id'])
          .subscribe( (articulo: any) => {
            this.articulo = articulo;
            console.log(this.articulo);
          });
    });
  }

}
