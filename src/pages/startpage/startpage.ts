import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the StartpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-startpage',
  templateUrl: 'startpage.html',
})
export class StartpagePage {
  signin(){
    this.navCtrl.push(SigninPage);
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StartpagePage');
  }

  

}


