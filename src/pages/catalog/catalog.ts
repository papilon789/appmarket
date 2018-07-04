import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CatalogTradePage } from '../catalog-trade/catalog-trade';
import { CatalogTechnicianPage } from '../catalog-technician/catalog-technician';
import { CatalogHousemaidPage } from '../catalog-housemaid/catalog-housemaid';
import { CatalogGardenPage } from '../catalog-garden/catalog-garden';
import { CatalogPatientcarePage } from '../catalog-patientcare/catalog-patientcare';
import { ProductProvider } from '../../providers/product/product';



@IonicPage()
@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html',
})
export class CatalogPage {

  categorys: any[];
  courses: any[];

  constructor(public productProvider: ProductProvider,
    public loadingCtrl: LoadingController,  
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {

    const loader = this.loadingCtrl.create({
      content: "กำลังโหลดข้อมูล...",

    });
    loader.present();

    this.productProvider.getcatalog().subscribe(
      (c)=> this.courses = c
      ,
      (error) => {
        loader.dismiss();
        console.log(error);
      },
      () => {
        loader.dismiss();
      }
    );

  }

  goTradepage(c){
    console.log(c);
    // let trade = "ขายสินค้า"
    // this.navCtrl.push(CatalogTradePage, {
    //   category: trade
    // });

  }

  goTechnicianpage(){
    this.navCtrl.push(CatalogTechnicianPage);
  }

  goHousemaidpage(){
    this.navCtrl.push(CatalogHousemaidPage);
  }

  goGardenpage(){
    this.navCtrl.push(CatalogGardenPage);
  }

  goPatientcare(){
    this.navCtrl.push(CatalogPatientcarePage);
  }

}
