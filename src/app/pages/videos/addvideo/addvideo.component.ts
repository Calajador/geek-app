import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Url } from '../../../interfaces/url.interface';
import { VideosService } from '../../../services/videos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {

  @ViewChild('forma') forma: NgForm;

  url: Url = {
    direccion: ''
  };

  constructor( public _videoS: VideosService, private route: Router) { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.url);

    this._videoS.postVideo(this.url)
        .subscribe( newvideo => {
          this.route.navigate(['/video']);
        },
        error => console.error(error));
        this.forma.reset();

  }

}
