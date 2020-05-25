import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListalbumsPage } from './listalbums.page';

const routes: Routes = [
  {
    path: '',
    component: ListalbumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListalbumsPageRoutingModule {}
