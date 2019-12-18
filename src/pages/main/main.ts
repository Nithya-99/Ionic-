import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GosocialPage } from '../gosocial/gosocial';
import { GiftPage } from '../gift/gift';
import { HomePage } from '../home/home';
import { GiftcardsPage } from '../giftcards/giftcards';
import { WallfamePage } from '../wallfame/wallfame';
import { WallfeedPage } from '../wallfeed/wallfeed';
import { PollPage } from '../poll/poll';




/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  home = HomePage;
  gosocial = GosocialPage;
  gift = GiftPage;
  giftcards = GiftcardsPage;
  wallfeed = WallfeedPage;
  walloffame = WallfamePage;
  poll = PollPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
