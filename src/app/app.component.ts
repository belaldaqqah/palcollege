import { TabsPage } from './../pages/tabs/tabs';
import { NewsfeedPage } from './../pages/newsfeed/newsfeed';
import { LoginPage } from './../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  constructor(platform: Platform, afAuth: AngularFireAuth, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      afAuth.authState.subscribe(
        user => {
          if (user) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = LoginPage;
          }
          statusBar.styleDefault();
          splashScreen.hide();
        },
        () => {
          this.rootPage = LoginPage;
          statusBar.styleDefault();
          splashScreen.hide();
        }
      )
    });
  }
 
}

