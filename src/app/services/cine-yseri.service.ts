import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Articulo } from '../interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class CineYseriService {

  cineYseriesUrl = 'https://geekapp-470ff.firebaseio.com/cineyseries.json';
  cineYseriUrl = 'https://geekapp-470ff.firebaseio.com/cineyseries/';

  articulos: Articulo [] = [];

  constructor(private _http: Http, private _httpC: HttpClient) {

    this.getArticulos()
        .subscribe(articulos => {

          // tslint:disable-next-line:forin
          for ( const id$ in articulos) {
            const p = articulos[id$];
            p.id$ = id$;
            this.articulos.push(articulos[id$]);
          }
        });
  }

  postArticulo( articulo: Articulo) {

    const body = JSON.stringify(articulo);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post(this.cineYseriesUrl, body, {headers: headers})
        .pipe(map( res => {
          return res.json();
        }));
  }

  getArticulos() {
   return this._http.get(this.cineYseriesUrl)
        .pipe(map( (res: any) => res.json()
        ));
  }

  getArticulo(id$: string) {

    return this._httpC.get(`${ this. cineYseriUrl }/${ id$ }.json `);
  }
}
