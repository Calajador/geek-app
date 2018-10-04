import { Component, OnInit, ViewChild  } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Articulo } from '../../../interfaces/articulo.interface';
import { InformaticaService } from '../../../services/informatica.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addinformatica',
  templateUrl: './addinformatica.component.html',
  styleUrls: ['./addinformatica.component.css']
})
export class AddinformaticaComponent implements OnInit {

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

  constructor( private _infor: InformaticaService,
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


      this._infor.postArticulo(this.articulo)
          .subscribe( newjuego => {
            this.route.navigate(['/home']);
          },
        error => console.error(error));
        this.forma.reset();



  }

}
