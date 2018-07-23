import { NewsfeedPage } from './../newsfeed/newsfeed';
import {Component} from "@angular/core";
import {LoginPage} from "../login/login";
import { AuthProvider } from './../../providers/auth/auth';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the RegisterGradPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-grad',
  templateUrl: 'register-grad.html',
})
export class RegisterGradPage {
  signupError: string;
  fullName: string;
  email: string;
  password: string;
  university: string;
  birthdate: string;
  Major: string

  constructor(
    public navCtrl: NavController, 
    private auth: AuthProvider, 
     public navParams: NavParams) {
  }
  registergrad() {
    this.auth.registergrad(this.email, this.password, this.birthdate, this.fullName, this.Major, this.university)
    .then(() => {
       this.navCtrl.setRoot(NewsfeedPage);
      }
     );
  }
}

