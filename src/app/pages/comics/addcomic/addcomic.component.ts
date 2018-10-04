import { Component, OnInit, ViewChild  } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Articulo } from '../../../interfaces/articulo.interface';
import { ComicsService } from '../../../services/comics.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcomic',
  templateUrl: './addcomic.component.html',
  styleUrls: ['./addcomic.component.css']
})
export class AddcomicComponent implements OnInit {

  @ViewChild('forma') forma: NgForm;

  articulo: Articulo = {
    titulo: '',
    img: '',
    fecha: '',
    alt: '',
    cuerpo0: '',
    cuerpo1: '',
    cuerpo2: '',
    cuerpo3: '',
    descripcion: '',
    autor: ''
  };

  nuevo = false;
  id: string;

  constructor( private _comics: ComicsService,
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


      this._comics.postArticulo(this.articulo)
          .subscribe( newjuego => {
            this.route.navigate(['/articulo'], newjuego.name);
          },
        error => console.error(error));
        this.forma.reset();



  }

}
