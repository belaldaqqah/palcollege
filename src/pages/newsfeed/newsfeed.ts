import { AuthProvider } from './../../providers/auth/auth';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {

  constructor(public navCtrl: NavController,
    private auth: AuthProvider,
    public navParams: NavParams) {
  }

  logOut() {
    this.auth.signOut().then(
        () => {
          this.navCtrl.setRoot(LoginPage);
        }
      );
  }

}