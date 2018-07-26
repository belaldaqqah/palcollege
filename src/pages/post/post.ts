import { AuthProvider } from './../../providers/auth/auth';
import { PostProvider } from './../../providers/post/post';
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {ElementRef, HostListener, Directive, OnInit} from '@angular/core';


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
 currentUserInfo: Observable<any>;
 content: string;
 time: string;
 @HostListener('input', ['$event.target'])
 onInput(textArea:HTMLTextAreaElement):void {
   this.adjust();
 }
 constructor(public navCtrl: NavController, 
  private auth: AuthProvider, 
  public PostProvider: PostProvider, 
  private view: ViewController,
  public element:ElementRef){
  this.posts = PostProvider.getPosts(),
  this.currentUserInfo = auth.getExtraUserData() 
 }

 ngOnInit():void {
  setTimeout(() => this.adjust(), 0);
}

adjust():void {
  let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
  textArea.style.overflow = 'hidden';
  textArea.style.height = 'auto';
  textArea.style.height = textArea.scrollHeight + "px";
}

 addPost(name) {
    this.auth.getExtraUserData().pipe(take(1)).subscribe((userInfo) => {
      let fullname;
      let date = new Date().toLocaleDateString();
      console.log(date);
      if (userInfo == null) {
        fullname = this.auth.getEmail();
      } else {
        fullname = userInfo['Full_Name'];
      }
      this.PostProvider.addPost({
        fullname: fullname,
        title: this.title,
        content: this.content,
        time: date
        
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



}



