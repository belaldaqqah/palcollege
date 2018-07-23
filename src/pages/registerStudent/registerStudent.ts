import { NewsfeedPage } from './../newsfeed/newsfeed';
import {Component} from "@angular/core";
import {LoginPage} from "../login/login";
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
   this.auth.registerstudent(this.email, this.password, this.birthdate, this.fullname, this.highschool)
   .then(
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

