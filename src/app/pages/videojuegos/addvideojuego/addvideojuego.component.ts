import { Component, OnInit, ViewChild  } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Articulo } from '../../../interfaces/articulo.interface';
import { VideojuegosService } from '../../../services/videojuegos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addvideojuego',
  templateUrl: './addvideojuego.component.html',
  styleUrls: ['./addvideojuego.component.css']
})
export class AddvideojuegoComponent implements OnInit {

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

  constructor( private _juegos: VideojuegosService,
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


      this._juegos.postArticulo(this.articulo)
          .subscribe( newjuego => {
            this.route.navigate(['/articulo'], newjuego.name);
          },
        error => console.error(error));
        this.forma.reset();



  }

}
