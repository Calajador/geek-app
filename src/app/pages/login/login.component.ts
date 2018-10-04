import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutentificacionService} from '../../services/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userdata: any;

  constructor(private formBu: FormBuilder, private _auth: AutentificacionService,
    private _router: Router, private _acroute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBu.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.userdata = this.saveUserData();

    this._auth.inicioSesion(this.userdata);
  }

  saveUserData() {
    const saveUserData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    return saveUserData;
  }

}
