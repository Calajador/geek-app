import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Url } from '../interfaces/url.interface';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  videosUrl = 'https://geekapp-470ff.firebaseio.com/videos.json';

  urls: Url [] = [];

  constructor(private _http: Http) {

    this.getVideos().subscribe(
      videos => {
        // tslint:disable-next-line:forin
        for (const id$ in videos) {
          const p = videos[id$];
          p.id$ = id$;
          this.urls.push(videos[id$]);
        }
      }
    );
   }

  postVideo(video: Url) {
    const body = JSON.stringify(video);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post(this.videosUrl, body, {headers: headers})
            .pipe( map( res => {
              return res.json();
            }));
  }

  getVideos() {
    return this._http.get(this.videosUrl)
        .pipe( map( (res: any) => res.json()
        ));
  }
}
