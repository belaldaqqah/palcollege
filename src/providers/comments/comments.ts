import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CommentsProvider {
  constructor(public db: AngularFireDatabase) { }

  getComment(postKey) {
    return this.db.list('comments/' + postKey).snapshotChanges();
  }

  addComment(postKey, comment) {
    return this.db.list('comments/' + postKey).push({
      fullname: comment.fullname,
      content: comment.content,
    });
  }
}
