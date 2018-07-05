import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the DetailProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-product',
  templateUrl: 'detail-product.html',
})
export class DetailProductPage {

  id: number;
  detail: any[];

  constructor(public productProvider: ProductProvider,
    public loadingCtrl: LoadingController, 
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {

    const loader = this.loadingCtrl.create({
      content: "กำลังโหลดข้อมูล...",

    });

    this.id = this.navParams.get('id');
    this.productProvider.getdetailproduct(this.id).subscribe(
      (d) => this.detail = d
      
    ),
    (error) => {
      loader.dismiss();
      console.log(error);
    },
    () => {
      loader.dismiss();
    }
  }

}
