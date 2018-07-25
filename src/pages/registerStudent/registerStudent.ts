import { TabsPage } from './../tabs/tabs';
import { NewsfeedPage } from './../newsfeed/newsfeed';
import { Component } from "@angular/core";
import { LoginPage } from "../login/login";
import { AuthProvider } from './../../providers/auth/auth';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-register',
  templateUrl: 'registerStudent.html'
})
export class RegisterPage {
  signupError: string;
  email: string;
  password: string;
  fullname: string;
  birthdate: string;
  highschool: string;

  constructor(
    public navCtrl: NavController,
    private auth: AuthProvider,
    public navParams: NavParams) {
  }


  // register and go to home page
  registerstudent() {
    const credentials = {
			email: this.email,
			password: this.password
    };
    const extraUserInfo = {
      fullname: this.fullname,
      highschool:this.highschool,
    };
    this.auth.registergrad(credentials, this.birthdate, extraUserInfo)
      .then(
        () => {
          this.navCtrl.setRoot(TabsPage);
          error => this.signupError = error.message
        }
      );
  }



  // go to login page
  login() {
    this.navCtrl.setRoot(LoginPage);
  }
}

