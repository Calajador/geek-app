import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Url } from '../interfaces/url.interface';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  podcastUrl = 'https://geekapp-470ff.firebaseio.com/podcast.json';

  urls: Url [] = [];

  constructor(private _http: Http) {

    this.getPodcast().subscribe(
      podcast => {
        // tslint:disable-next-line:forin
        for (const id$ in podcast) {
          const p = podcast[id$];
          p.id$ = id$;
          this.urls.push(podcast[id$]);
        }
      }
    );
   }

  postPodcast(podcast: Url) {
    const body = JSON.stringify(podcast);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post(this.podcastUrl, body, {headers: headers})
            .pipe( map( res => {
              return res.json();
            }));
  }

  getPodcast() {
    return this._http.get(this.podcastUrl)
        .pipe( map( (res: any) => res.json()
        ));
  }
}
