
import { Observable } from 'rxjs';
import { PostProvider } from './../../providers/post/post';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

 

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
  
})
export class CommentsPage {
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
    PostProvider.getPostsByKey(key).subscribe((post) => {
      if (!post) {
        this.post = null;
      } else {
        this.post = post.payload.val();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

}
