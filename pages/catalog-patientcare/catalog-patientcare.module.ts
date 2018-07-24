import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogPatientcarePage } from './catalog-patientcare';

@NgModule({
  declarations: [
    CatalogPatientcarePage,
  ],
  imports: [
    IonicPageModule.forChild(CatalogPatientcarePage),
  ],
})
export class CatalogPatientcarePageModule {}
