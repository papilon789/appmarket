import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MemberProvider } from '../../providers/member/member';
import { Register2Page } from '../register2/register2';


@IonicPage()
@Component({
  selector: 'page-register2-1',
  templateUrl: 'register2-1.html',
})
export class Register2_1Page {

  idform: FormGroup;
  

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public memberProvider: MemberProvider, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register2_1Page');
  }

  getItems(idform){

    console.log(idform);

    this.navCtrl.push(Register2Page, {
      id: idform.id
    });
  }

  ngOnInit() {
    this.idform = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(12), Validators.maxLength(13)]),
    });
  }

}
