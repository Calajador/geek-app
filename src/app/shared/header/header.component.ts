import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../../services/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private _authS: AutentificacionService,
               private router: Router,
               private aroute: ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth() {
    return this._authS.estaLogeado();
  }

  onLogout() {
    this._authS.logout();
    this.router.navigate(['/home']);
  }

}
