import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Articulo } from '../../../interfaces/articulo.interface';
import { CineYseriService } from '../../../services/cine-yseri.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcine-yserie',
  templateUrl: './addcine-yserie.component.html',
  styleUrls: ['./addcine-yserie.component.css']
})
export class AddcineYserieComponent implements OnInit {

  @ViewChild('forma') forma: NgForm;

  articulo: Articulo = {
    titulo: '',
    img: '',
    alt: '',
    fecha: '',
    cuerpo0: '',
    cuerpo1: '',
    cuerpo2: '',
    cuerpo3: '',
    descripcion: '',
    autor: ''
  };

  nuevo = false;
  id: string;

  constructor( private _cineYser: CineYseriService,
              private route: Router, private arouter: ActivatedRoute) {
                this.arouter.params.subscribe( parametros => {
                  console.log( parametros );
                  this.id = parametros['id'];
                });
              }

  ngOnInit() {
  }

  guardar () {
    console.log(this.articulo);


      this._cineYser.postArticulo(this.articulo)
          .subscribe( newjuego => {
            this.route.navigate(['/articulo'], newjuego.name);
          },
        error => console.error(error));
        this.forma.reset();



  }

}
