import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the PostproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-postproduct',
  templateUrl: 'postproduct.html',
})
export class PostproductPage {

  myForm: FormGroup;
  date: any = new Date().toJSON();
  currentDate: string = new Date().toLocaleDateString();

  constructor(public productProvider: ProductProvider, 
              public alerCtrl: AlertController,
              public modalCtrl: ModalController, 
              public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PostproductPage');
    console.log(this.date);
    console.log(this.currentDate);
  }

  postproduct(myForm){
    console.log(myForm)

    this.productProvider.postproduct(myForm).subscribe(
      (feedback) => {
        if(feedback.statusText === 'ok'){

          const alert = this.alerCtrl.create({
            title: 'ผลการลงประกาศ',
            subTitle: feedback.message,
            buttons: ['OK']
          });
          alert.present();

        }else{

          const alert = this.alerCtrl.create({
            title: 'ผลการลงประกาศ',
            subTitle: feedback.message,
            buttons: ['OK']
          });
          alert.present();

        }
      }
    );

  }


  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    // let date = this.date;
    this.myForm = new FormGroup({
      productname: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      detail: new FormControl(''),
      tel: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', Validators.pattern(EMAILPATTERN)),
      line: new FormControl(''),
      dateregist: new FormControl('')
      
    });
  }






}
