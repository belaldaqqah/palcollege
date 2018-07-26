import { CommentsPage } from './../comments/comments';
import { Observable } from 'rxjs';
import { PostPage } from './../post/post';
import { PostProvider } from './../../providers/post/post';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { LoginPage } from './../login/login';
import {Http} from '@angular/http';

 

@IonicPage()
@Component({
 selector: 'page-newsfeed',
 templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {   
   cards: any;
   post: any;
   posts: Observable<any>;
   currentUserInfo: Observable<any>
  
   
   
   constructor(
      public navCtrl: NavController,
      private http: Http,
      private alertCtrl: AlertController,
      public loadingCtrl: LoadingController,
      private auth: AuthProvider,
      public navParams: NavParams,
      private PostProvider: PostProvider){
      this.cards = new Array(10);
      this.posts = PostProvider.getPosts();
      this.currentUserInfo = auth.getExtraUserData();
      const key = navParams.get('key');
 
    }
  
  getPosts() {
    this.PostProvider.getPosts();
  }
  selectPost(key) {
    this.navCtrl.push(CommentsPage, {
      key
    });
  }
   
}
