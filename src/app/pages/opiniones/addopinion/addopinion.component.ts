import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Articulo } from '../../../interfaces/articulo.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { OpinionService } from '../../../services/opinion.service';

@Component({
  selector: 'app-addopinion',
  templateUrl: './addopinion.component.html',
  styleUrls: ['./addopinion.component.css']
})
export class AddopinionComponent implements OnInit {

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

  constructor( private _opinionS: OpinionService,
    private route: Router, private arouter: ActivatedRoute) {
      this.arouter.params.subscribe( parametros => {
        this.id = parametros['id'];
      });
     }

  ngOnInit() {
  }

  guardar() {
    this._opinionS.postArticulo(this.articulo)
            .subscribe( newopinion => {
              this.route.navigate(['/home']);
            });

        this.forma.reset();
  }

}
