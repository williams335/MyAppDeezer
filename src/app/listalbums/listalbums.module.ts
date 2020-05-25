import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListalbumsPageRoutingModule } from './listalbums-routing.module';

import { ListalbumsPage } from './listalbums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListalbumsPageRoutingModule
  ],
  declarations: [ListalbumsPage]
})
export class ListalbumsPageModule {}
