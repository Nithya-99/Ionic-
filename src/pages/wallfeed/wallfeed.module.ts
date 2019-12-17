import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WallfeedPage } from './wallfeed';

@NgModule({
  declarations: [
    WallfeedPage,
  ],
  imports: [
    IonicPageModule.forChild(WallfeedPage),
  ],
})
export class WallfeedPageModule {}


