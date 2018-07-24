import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MemberProvider } from '../../providers/member/member';
import { HomePage } from '../home/home';
import { VALID } from '@angular/forms/src/model';
import { variable } from '@angular/compiler/src/output/output_ast';


@IonicPage()
@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html',
})
export class Register2Page {

  id: string;
  detail: any[];
  signupform: FormGroup;
  



  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public memberProvider: MemberProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log(this.id);
    this.id = this.navParams.get('id');
    this.memberProvider.getidcard(this.id).subscribe(
      (d) => this.detail = d
    )
    
  }

  registerUser(signupform){
    
    console.log(signupform);

    this.memberProvider.register(signupform).subscribe(
      (feedback) => {
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
    this.signupform = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      nickname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Zก-๙ ]*'), Validators.minLength(1), Validators.maxLength(10)]),
      tel: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', Validators.pattern(EMAILPATTERN)),
      line: new FormControl('', Validators.pattern('[a-zA-Z0-9_-]*')),
      aptitude: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });
  }



}
