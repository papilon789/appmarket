import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfomemberPage } from './infomember';

@NgModule({
  declarations: [
    InfomemberPage,
  ],
  imports: [
    IonicPageModule.forChild(InfomemberPage),
  ],
})
export class InfomemberPageModule {}
