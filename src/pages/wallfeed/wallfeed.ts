import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WallfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallfeed',
  templateUrl: 'wallfeed.html',
})
export class WallfeedPage {

  items = [1,2,3,4,5,6,7,8,9];

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WallfeedPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length ); 
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


}
