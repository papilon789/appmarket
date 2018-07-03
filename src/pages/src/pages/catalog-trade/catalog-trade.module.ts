import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogTradePage } from './catalog-trade';

@NgModule({
  declarations: [
    CatalogTradePage,
  ],
  imports: [
    IonicPageModule.forChild(CatalogTradePage),
  ],
})
export class CatalogTradePageModule {}
