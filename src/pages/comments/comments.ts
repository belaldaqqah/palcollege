import { PostProvider } from './../../providers/post/post';
import { CommentsProvider } from './../../providers/comments/comments';
import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  comments: Observable<any>;
  currentUserInfo: Observable<any>;
  newComment: string;
  post: any;
  postKey: any;
  content: string;

  constructor(public navCtrl: NavController,
      private auth: AuthProvider,
      public CommentsProvider: CommentsProvider,
      private postProvider: PostProvider,
      private navParams: NavParams) {

    const key = navParams.get('key');
    this.postKey = key;
    postProvider.getPostsByKey(key).subscribe((post) => {
      if (!post) {
        this.post = null;
      } else {
        this.post = post.payload.val();
      }
    });
    this.comments = CommentsProvider.getComment(key);
    this.currentUserInfo = auth.getExtraUserData();
  }

  addComment() {
    this.auth.getExtraUserData().pipe(take(1)).subscribe((userInfo) => {
      let name;
      if (userInfo == null) {
        name = this.auth.getEmail();
      } else {
        name = userInfo['Full_Name'];
      }
      const newComment = {
        fullname: name,
        content: this.content
      };
      this.CommentsProvider.addComment(this.postKey, newComment);
    });
  }

  signOut() {
    this.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

}
