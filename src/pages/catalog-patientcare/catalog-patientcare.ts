import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { DetailProductPage } from '../detail-product/detail-product';


@IonicPage()
@Component({
  selector: 'page-catalog-patientcare',
  templateUrl: 'catalog-patientcare.html',
})
export class CatalogPatientcarePage {

  category: string;
  product: any[];

  constructor(public productProvider: ProductProvider,
    public loadingCtrl: LoadingController, 
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.category);
    const loader = this.loadingCtrl.create({
      content: "กำลังโหลดข้อมูล...",

    });

    this.category = this.navParams.get('category');
    this.productProvider.getcatalogtype(this.category).subscribe(
      (p) => this.product = p
      
    ),
    (error) => {
      loader.dismiss();
      console.log(error);
    },
    () => {
      loader.dismiss();
    }
  }

  goDetailProduct(p){
    console.log(p);
    this.navCtrl.push(DetailProductPage, {
      id: p.id
    });

  }

}
