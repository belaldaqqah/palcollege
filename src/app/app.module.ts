import { RegisterGradPageModule } from './../pages/register-grad/register-grad.module';
import { SorgPage } from './../pages/sorg/sorg';
import { NewsfeedPageModule } from './../pages/newsfeed/newsfeed.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from '../config';
import { LoginPageModule } from './../pages/login/login.module';
import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { RegisterPageModule } from '../pages/register/register.module';
import { SorgPageModule } from '../pages/sorg/sorg.module';
import { RegisterGradPage } from '../pages/register-grad/register-grad';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    LoginPageModule,
    RegisterPageModule,
    NewsfeedPageModule,
    SorgPageModule,
    RegisterGradPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SorgPage,
    RegisterGradPage,
  ],
  providers: [
    StatusBar,
    AngularFireAuth,
    AngularFireDatabase,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
      ]
})
export class AppModule {}
