import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CatalogTradePage } from '../catalog-trade/catalog-trade';
import { CatalogTechnicianPage } from '../catalog-technician/catalog-technician';
import { CatalogHousemaidPage } from '../catalog-housemaid/catalog-housemaid';
import { CatalogGardenPage } from '../catalog-garden/catalog-garden';

/**
 * Generated class for the CatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html',
})
export class CatalogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogPage');
  }

  goTradepage(){
    this.navCtrl.push(CatalogTradePage);
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

}
