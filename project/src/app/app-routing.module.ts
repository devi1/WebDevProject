import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumDetailsComponent} from './album-details/album-details.component';
import {AlbumPhotosComponent} from './album-photos/album-photos.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {LastWorksComponent} from './last-works/last-works.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'albums', component: AlbumsComponent},
    {path: 'albums/:id', component: AlbumDetailsComponent},
    {path: 'albums/:id/photos', component: AlbumPhotosComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: 'cart', component: CartComponent},
    {path: 'lastworks', component: LastWorksComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
