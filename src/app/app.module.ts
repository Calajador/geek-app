import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos/videojuegos.component';
import { AddvideojuegoComponent } from './pages/videojuegos/addvideojuego/addvideojuego.component';
import { ComicsComponent } from './pages/comics/comics/comics.component';
import { AddcomicComponent } from './pages/comics/addcomic/addcomic.component';
import { CineYseriesComponent } from './pages/cineyseries/cine-yseries/cine-yseries.component';
import { AddcineYserieComponent } from './pages/cineyseries/addcine-yserie/addcine-yserie.component';
import { InformaticaComponent } from './pages/informatica/informatica/informatica.component';
import { AddinformaticaComponent } from './pages/informatica/addinformatica/addinformatica.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ArtjuegosComponent } from './pages/videojuegos/artjuegos/artjuegos.component';
import { ArtinformaticaComponent } from './pages/informatica/artinformatica/artinformatica.component';
import { ArtcomicComponent } from './pages/comics/artcomic/artcomic.component';
import { ArtciyserComponent } from './pages/cineyseries/artciyser/artciyser.component';
import { OpinionesComponent } from './pages/opiniones/opiniones/opiniones.component';
import { AddopinionComponent } from './pages/opiniones/addopinion/addopinion.component';
import { ArtopinionComponent } from './pages/opiniones/artopinion/artopinion.component';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { VideosComponent } from './pages/videos/videos.component';
import { AddvideoComponent } from './pages/videos/addvideo/addvideo.component';
import { SafePipe } from './pipes/safe.pipe';
import { AddpodcastComponent } from './pages/addpodcast/addpodcast.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideojuegosComponent,
    AddvideojuegoComponent,
    ComicsComponent,
    AddcomicComponent,
    CineYseriesComponent,
    AddcineYserieComponent,
    InformaticaComponent,
    AddinformaticaComponent,
    AdminComponent,
    HomeComponent,
    ArtjuegosComponent,
    ArtinformaticaComponent,
    ArtcomicComponent,
    ArtciyserComponent,
    OpinionesComponent,
    AddopinionComponent,
    ArtopinionComponent,
    LoginComponent,
    RegistroComponent,
    VideosComponent,
    AddvideoComponent,
    SafePipe,
    AddpodcastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
