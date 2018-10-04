import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos/videojuegos.component';
import { ComicsComponent } from './pages/comics/comics/comics.component';
import { CineYseriesComponent } from './pages/cineyseries/cine-yseries/cine-yseries.component';
import { InformaticaComponent } from './pages/informatica/informatica/informatica.component';
import { AddcineYserieComponent } from './pages/cineyseries/addcine-yserie/addcine-yserie.component';
import { AddvideojuegoComponent } from './pages/videojuegos/addvideojuego/addvideojuego.component';
import { AddcomicComponent } from './pages/comics/addcomic/addcomic.component';
import { AddinformaticaComponent } from './pages/informatica/addinformatica/addinformatica.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
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
import { AddpodcastComponent } from './pages/addpodcast/addpodcast.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'juegos', component: VideojuegosComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'cineYser', component: CineYseriesComponent},
  {path: 'informatica', component: InformaticaComponent},
  {path: 'opinion', component: OpinionesComponent},
  {path: 'video', component: VideosComponent},
  {path: 'registro', component: RegistroComponent, canActivate: [GuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'addcineYser', component: AddcineYserieComponent, canActivate: [GuardService]},
  {path: 'addvideo', component: AddvideoComponent, canActivate: [GuardService]},
  {path: 'addcomic', component: AddcomicComponent, canActivate: [GuardService]},
  {path: 'addinformatica', component: AddinformaticaComponent, canActivate: [GuardService]},
  {path: 'addopinion', component: AddopinionComponent, canActivate: [GuardService]},
  {path: 'addvideo', component: AddvideoComponent, canActivate: [GuardService]},
  {path: 'addpodcast', component: AddpodcastComponent, canActivate: [GuardService]},
  {path: 'artjuego/:id', component: ArtjuegosComponent},
  {path: 'artinfor/:id', component: ArtinformaticaComponent},
  {path: 'artcomic/:id', component: ArtcomicComponent},
  {path: 'artcinyser/:id', component: ArtciyserComponent},
  {path: 'artopinion/:id', component: ArtopinionComponent},
  {path: 'admin', component: AdminComponent, canActivate: [GuardService]},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
