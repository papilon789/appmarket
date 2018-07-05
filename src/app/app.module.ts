import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { InfomemberPageModule } from '../pages/infomember/infomember.module';
import { RegistorPageModule } from '../pages/registor/registor.module';
import { MemberProvider } from '../providers/member/member';
import { FormsModule } from '@angular/forms';
import { Register2PageModule } from '../pages/register2/register2.module';
import { PostproductPageModule } from '../pages/postproduct/postproduct.module';
import { ProductProvider } from '../providers/product/product';
import { CatalogPageModule } from '../pages/catalog/catalog.module';
import { CatalogTradePageModule } from '../pages/catalog-trade/catalog-trade.module';
import { CatalogTechnicianPageModule } from '../pages/catalog-technician/catalog-technician.module';
import { CatalogGardenPageModule } from '../pages/catalog-garden/catalog-garden.module';
import { CatalogHousemaidPageModule } from '../pages/catalog-housemaid/catalog-housemaid.module';
import { CatalogPatientcarePageModule } from '../pages/catalog-patientcare/catalog-patientcare.module';
import { DetailProductPageModule } from '../pages/detail-product/detail-product.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp,
      {
        monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน','ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
        monthShortNames: ['ม.ค.', 'ก.พ.', 'มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
        dayNames: ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'],
        dayShortNames: ['จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.', 'อา.']
    }
    ),
    LoginPageModule,
    InfomemberPageModule,
    RegistorPageModule,
    Register2PageModule,
    PostproductPageModule,
    CatalogPageModule,
    CatalogTradePageModule,
    CatalogTechnicianPageModule,
    CatalogGardenPageModule,
    CatalogHousemaidPageModule,
    CatalogPatientcarePageModule,
    DetailProductPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemberProvider,
    ProductProvider
  ]
})
export class AppModule {}
