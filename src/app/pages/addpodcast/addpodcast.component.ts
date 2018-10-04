import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Url } from '../../interfaces/url.interface';
import { PodcastService } from '../../services/podcast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpodcast',
  templateUrl: './addpodcast.component.html',
  styleUrls: ['./addpodcast.component.css']
})
export class AddpodcastComponent implements OnInit {

  @ViewChild('forma') forma: NgForm;

  url: Url = {
    direccion: ''
  };

  constructor( public _podS: PodcastService, private route: Router) { }

  ngOnInit() {
  }

  guardar() {

    this._podS.postPodcast(this.url)
        .subscribe( newpod => {
          this.route.navigate(['/home']);
        },
        error => console.error(error));
        this.forma.reset();
  }

}
