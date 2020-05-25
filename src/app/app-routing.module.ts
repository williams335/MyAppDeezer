import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listalbums/:url',
    loadChildren: () => import('./listalbums/listalbums.module').then( m => m.ListalbumsPageModule)
  },
  {
    path: 'playlists/:tracklist/:cover_big/:title1',
    loadChildren: () => import('./playlists/playlists.module').then( m => m.PlaylistsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
