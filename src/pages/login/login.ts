import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MemberProvider } from '../../providers/member/member';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  tel: string = null;
  password: string = null;

  constructor(public memberProvider: MemberProvider,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController, 
              public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    
    this.memberProvider.login(this.tel, this.password)
    .subscribe((data: any)=>{
      console.log(data);
      if(data.ok){
          let token = data.token;
          let id = data.id;
          
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('id', id);
        
          this.navCtrl.setRoot(HomePage);
      }else{
          let alert = this.alertCtrl.create({
            title: 'เกิดข้อผิดพลาด!',
            subTitle: 'ชื่อผู้ใช้งาน หรือรหัสผ่านไม่ถูกต้อง!',
           buttons: ['OK']
         });
          alert.present();
      }
  });
  }

}
