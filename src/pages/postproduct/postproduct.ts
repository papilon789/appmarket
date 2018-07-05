import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductProvider } from '../../providers/product/product';
import { HomePage } from '../home/home';

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
  date: any = new Date().toDateString();
  currentDate: any = new Date().toLocaleDateString();

  constructor(public productProvider: ProductProvider, 
              public alertCtrl: AlertController,
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
    console.log(myForm);
    this.productProvider.postproduct(myForm).subscribe(
      
      (feedback) => {
        console.log(feedback);
        if(feedback.status === 'ok'){

          const alert = this.alertCtrl.create({
            title: 'ผลการลงทะเบียน',
            subTitle: 'สำเร็จ',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.setRoot(HomePage);

        }else{

          const alert = this.alertCtrl.create({
            title: 'ผลการลงทะเบียน',
            subTitle: 'ไม่สำเร็จ',
            buttons: ['OK']
          });
          alert.present();

        }
      }
    );
  }


  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    
    this.myForm = new FormGroup({
      idposjob: new FormControl(''),
      idgetjob: new FormControl(''),
      datestartjob: new FormControl(''),
      dateclosejob: new FormControl(''),
      productname: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      detail: new FormControl(''),
      tel: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', Validators.pattern(EMAILPATTERN)),
      line: new FormControl('', Validators.pattern('[a-zA-Z0-9_-]*')),
      dateregist: new FormControl('')
      
    });
  }






}