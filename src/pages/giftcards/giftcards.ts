import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GiftcardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giftcards',
  templateUrl: 'giftcards.html',
})
export class GiftcardsPage {
  cardList:any=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftcardsPage');
  }

}
