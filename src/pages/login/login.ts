import { NewsfeedPage } from './../newsfeed/newsfeed';
import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import { ShoppingListPage } from '../shopping-list/shopping-list';

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
  this.navCtrl.push(RegisterPage);
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

signup()    {
  
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