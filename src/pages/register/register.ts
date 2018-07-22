import { NewsfeedPage } from './../newsfeed/newsfeed';
import {Component} from "@angular/core";
import {LoginPage} from "../login/login";
import { AuthProvider } from './../../providers/auth/auth';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
 selector: 'page-register',
 templateUrl: 'register.html'
})
export class RegisterPage {
    signupError: string;
    email: string;
    password: string;
    fullName: string;
    age: string;
   
    constructor(
      public navCtrl: NavController, 
      private auth: AuthProvider, 
      public navParams: NavParams) {
    }
   
    
 // register and go to home page
 register() {
   this.auth.register(this.email, this.password, this.age).then(
    () => {
      this.navCtrl.setRoot(NewsfeedPage);
     }
    );
 }
 // go to login page
 login() {
   this.navCtrl.setRoot(LoginPage);
 }
}

