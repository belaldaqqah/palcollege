import { PostProvider } from './../../providers/post/post';
import { AuthProvider } from './../../providers/auth/auth';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  email: string;
  userData: any;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private auth: AuthProvider,
  private post: PostProvider) {
    this.email = auth.getEmail();
    auth.getExtraUserData().subscribe((userData) => {
      console.log(userData);
      this.userData = userData;
    });
  }

  getEmail() {
    return this.auth.getEmail()
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

        
  logOut() {
    this.auth.signOut().then(
      () => {
        this.navCtrl.setRoot(LoginPage);
      }
    );
  }

}
