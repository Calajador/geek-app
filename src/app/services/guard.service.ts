import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor( private _authS: AutentificacionService) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._authS.estaLogeado();
  }
}
