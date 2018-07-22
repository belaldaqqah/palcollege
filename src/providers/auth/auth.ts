import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

import firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
 private user: firebase.User;

 constructor(public afAuth: AngularFireAuth,
  private db: AngularFireDatabase) {
   afAuth.authState.subscribe(user => {
     this.user = user;
   });
 }


 signInWithEmail(credentials) {
   return this.afAuth.auth.signInWithEmailAndPassword(
     credentials.email,
     credentials.password,
   );
 }

 register(email, password, age) {
  return this.afAuth.auth.createUserWithEmailAndPassword(
    email,
    password,
  ).then((userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
    return this.db.object("users/" + user.uid).set({
      age: age,
      first_name: "first name",
      mlast_name: "last m"
    })
  })
  // this.db.list("hello").push({
  //   email:
  //   username:
  //   password:
  // })
}

 signOut() {
  this.afAuth.auth.signOut();
}

 getEmail() {
  return this.user && this.user.email;
}


}