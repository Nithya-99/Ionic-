import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GosocialPage } from './gosocial';

@NgModule({
  declarations: [
    GosocialPage,
  ],
  imports: [
    IonicPageModule.forChild(GosocialPage),
  ],
})
export class GosocialPageModule {}
