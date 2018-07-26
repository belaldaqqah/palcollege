import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClientModule  } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  constructor(public http: HttpClientModule,
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase) {
    console.log('Hello PostProvider Provider');
  }
   

  
getPosts() {
  return this.db.list('posts').snapshotChanges();
  
}

getPostsByKey(key) {
  return this.db.object('posts/' + key).snapshotChanges();
}

addPost(post) {
return this.db.list('posts').push({
  fullname: post.fullname,
  title: post.title,
  content: post.content,
  time: post.time
});
}

removePost(id) {
this.db.list('posts').remove(id);
}

}
