import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../../../services/autentificacion.service';
import { VideojuegosService } from '../../../services/videojuegos.service';
import { InformaticaService } from '../../../services/informatica.service';
import { ComicsService } from '../../../services/comics.service';
import { CineYseriService } from '../../../services/cine-yseri.service';
import { OpinionService } from '../../../services/opinion.service';
import { VideosService } from '../../../services/videos.service';
import { PodcastService } from '../../../services/podcast.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private _authS: AutentificacionService, public _juegoS: VideojuegosService,
    public _infoS: InformaticaService, public _comicS: ComicsService,
    public _cineYser: CineYseriService, public _opiS: OpinionService,
    public _videoS: VideosService, public _podS: PodcastService) {

   }

  ngOnInit() {
  }


  isAuth() {
    return this._authS.estaLogeado();
  }


}
