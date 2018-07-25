import { NotificationsPage } from './../notifications/notifications';
import { ProfilePage } from './../profile/profile';
import { AboutUsPage } from './../about-us/about-us';
import { NewsfeedPage } from './../newsfeed/newsfeed';
import { PostPage } from '../post/post';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, Tabs } from 'ionic-angular';
// tslint:disable-next-line:no-unused-variable
import { Http, Headers } from '@angular/http';
import 'rxjs';
// tslint:disable-next-line:no-unused-variable





@Component({
 templateUrl: 'tabs.html',
 selector: 'tabs-page'
})

export class TabsPage {
  @ViewChild('mainTabs') tabRef: Tabs;

 tab1Root = NewsfeedPage;
 tab2Root = NotificationsPage;
 tab4Root = ProfilePage;
 tab5Root = AboutUsPage;

 public token;
 loading: any;
 public money: number = 0;

 constructor(
   public navCtrl: NavController,

   private http: Http,
   private alertCtrl: AlertController,
   public loadingCtrl: LoadingController,
   public navParams: NavParams,
   private modal: ModalController
 ) {
 }
 
 
 openModal() {
   const myModal= this.modal.create('PostPage', {},{cssClass:"mymodal"} );
   myModal.onDidDismiss(data => {
     if (data === true) {
      this.tabRef.select(0);
     }
   });
   myModal.present();
   }
}