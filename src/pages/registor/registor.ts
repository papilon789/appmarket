import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { MemberProvider } from '../../providers/member/member';



@IonicPage()
@Component({
  selector: 'page-registor',
  templateUrl: 'registor.html',
})
export class RegistorPage {

  constructor(public navCtrl: NavController,
              public alerCtrl: AlertController,
              public modalCtrl: ModalController,
              public memberProvider: MemberProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RegistorPage');
  }

  registerUser(signupform){
    console.log(signupform)

    this.memberProvider.register(signupform).subscribe(
      (feedback) => {
        if(feedback.status === 'ok'){

          const alert = this.alerCtrl.create({
            title: 'ผลการลงทะเบียน',
            subTitle: feedback.message,
            buttons: ['OK']
          });
          alert.present();

        }else{

          const alert = this.alerCtrl.create({
            title: 'ผลการลงทะเบียน',
            subTitle: feedback.message,
            buttons: ['OK']
          });
          alert.present();

        }
      }
    );
  }


}
