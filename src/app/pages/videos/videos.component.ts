import { Component, OnInit } from '@angular/core';
import { Url } from '../../interfaces/url.interface';
import { VideosService } from '../../services/videos.service';
import { AutentificacionService } from '../../services/autentificacion.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  urls: Url [] = [];

  constructor( public _videoS: VideosService, private _authS: AutentificacionService) {

    this.urls = this._videoS.urls;
   }

  ngOnInit() {
  }

  isAuth() {
    return this._authS.estaLogeado();
  }

}
