import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { LoginPage } from './../login/login';
import {Http} from '@angular/http';
import 'rxjs';


@IonicPage()
@Component({
 selector: 'page-newsfeed',
 templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {
   public token;
   loading: any;
   public money:number=0;
   
   constructor(
       public navCtrl: NavController,
       private http: Http,
       private alertCtrl: AlertController,
       public loadingCtrl: LoadingController,
       private auth: AuthProvider,
       public navParams: NavParams
       

   ) {}
 
   
   /**
    * Generated class for the NewsfeedPage page.
    *
    * See https://ionicframework.com/docs/components/#navigation for more info on
    * Ionic pages and navigation.
    */
       
     logOut() {
       this.auth.signOut().then(
         () => {
           this.navCtrl.setRoot(LoginPage);
         }
       );
     }
   
   }

   

    //test
     //  this.stripe.setPublishableKey(' pk_test_KFuKDO7ayBQ3tw9nsQAYGls5');