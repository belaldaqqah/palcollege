import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ShoppingListProvider {
 constructor(public db: AngularFireDatabase) { }

 getItems() {
   return this.db.list('items').snapshotChanges();
 }

 addItem(name, author) {
   this.db.list('items').push({
     name,
     author
   });
 }
}
