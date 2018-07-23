import { NewsfeedPage } from './../newsfeed/newsfeed';
import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {RegisterPage} from "../registerStudent/registerStudent";
import { SorgPage } from '../sorg/sorg';

@Component({
 selector: 'page-login',
 templateUrl: 'login.html'
})
export class LoginPage {
  email: string;
  password: string;
  loginError: string;
  nav: any;
  auth: any;

 constructor(
   public navCtrl: NavController,
   public forgotCtrl: AlertController,
   public menu: MenuController,
   public toastCtrl: ToastController) {

   this.menu.swipeEnable(false);
 }

 // go to register page
 signUp() {
  this.navCtrl.push(SorgPage);
 }

 ionViewDidLoad() {
  console.log('ionViewDidLoad LoginPage');
 }
 // login and go to home page

 login() {
  if (!this.email) return;

  const credentials = {
    email: this.email,
    password: this.password
  };
  this.auth.signInWithEmail(credentials).then(
    () => this.navCtrl.setRoot(NewsfeedPage),
    error => this.loginError = error.message
  );
}


 forgotPass() {
   let forgot = this.forgotCtrl.create({
     title: 'Forgot Password?',
     message: "Enter you email address to send a reset link password.",
     inputs: [
       {
         name: 'email',
         placeholder: 'Email',
         type: 'email'
       },
     ],
     buttons: [
       {
         text: 'Cancel',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Send',
         handler: data => {
           console.log('Send clicked');
           let toast = this.toastCtrl.create({
             message: 'Email was sended successfully',
             duration: 3000,
             position: 'top',
             cssClass: 'dark-trans',
             closeButtonText: 'OK',
             showCloseButton: true
           });
           toast.present();
         }
       }
     ]
   });
   forgot.present();
 }

}