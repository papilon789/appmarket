import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogGardenPage } from './catalog-garden';

@NgModule({
  declarations: [
    CatalogGardenPage,
  ],
  imports: [
    IonicPageModule.forChild(CatalogGardenPage),
  ],
})
export class CatalogGardenPageModule {}
