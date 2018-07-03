import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MemberProvider } from '../../providers/member/member';

/**
 * Generated class for the Register2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html',
})
export class Register2Page {

  signupform: FormGroup;

  constructor(public navCtrl: NavController,
    public alerCtrl: AlertController,
    public modalCtrl: ModalController,
    public memberProvider: MemberProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register2Page');
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

  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      nickname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1), Validators.maxLength(10)]),
      tel: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', Validators.pattern(EMAILPATTERN)),
      line: new FormControl(''),
      aptitude: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });
  }



}
