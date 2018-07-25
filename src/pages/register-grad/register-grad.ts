import { TabsPage } from './../tabs/tabs';
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
  fullname: string;
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
    const credentials = {
			email: this.email,
			password: this.password
    };
    const extraUserInfo = {
      fullname: this.fullname,
      university:this.university,
      major:this.Major,
    };
    this.auth.registergrad(credentials, this.birthdate, extraUserInfo)
    .then(() => {
       this.navCtrl.setRoot(TabsPage);
       error => this.signupError = error.message
      }
     );
  }


			

}

