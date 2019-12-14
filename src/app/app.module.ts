import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SigninPage } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';
import { StartpagePage } from '../pages/startpage/startpage';
import { SignupPage } from '../pages/signup/signup';
import { GosocialPage } from '../pages/gosocial/gosocial';
import { GiftPage } from '../pages/gift/gift';
import { MainPage } from '../pages/main/main';

@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    HomePage,
    StartpagePage,
    SignupPage,
    GosocialPage,
    GiftPage,
    MainPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsPlacement:'top',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    HomePage,
    StartpagePage,
    SignupPage,
    GosocialPage,
    GiftPage,
    MainPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
