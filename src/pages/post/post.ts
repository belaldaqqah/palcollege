import { AuthProvider } from './../../providers/auth/auth';
import { PostProvider } from './../../providers/post/post';
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@IonicPage()
@Component({
 selector: 'page-post',
 templateUrl: 'post.html',
})
export class PostPage {
 posts: Observable<any>;
 Post: string;
 title: string;
 fullname:string;
 currentUserInfo: Observable<any>
 content: string;

 constructor(public navCtrl: NavController, 
  private auth: AuthProvider, 
  public PostProvider: PostProvider, 
  private view: ViewController){
  this.posts = PostProvider.getPosts(),
  this.currentUserInfo = auth.getExtraUserData() 
  
 }


 addPost(name) {
    this.auth.getExtraUserData().pipe(take(1)).subscribe((userInfo) => {
      let fullname;
      if (userInfo == null) {
        fullname = this.auth.getEmail();
      } else {
        fullname = userInfo['Full_Name'];
      }
      this.PostProvider.addPost({
        fullname: fullname,
        title: this.title,
        content: this.content,
        
      }).then((post) => {
          this.closeModal(true);
        });
    });
  }

 
 removePost(id) {
  this.PostProvider.removePost(id);
}

closeModal(didPost = false){
  this.view.dismiss(didPost);
}

ionViewDidLoad() {
  console.log('ionViewDidLoad ShoppingListPage');
}


}



