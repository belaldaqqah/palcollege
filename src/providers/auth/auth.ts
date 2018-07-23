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

 registergrad(email, password, birthdate, fullname, university,major) {
  return this.afAuth.auth.createUserWithEmailAndPassword(
    email,
    password,
  ).then((userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
    return this.db.object("users/" + user.uid).set({
      Birthdate: birthdate,
      Full_Name: fullname,
      university: university,
      major: major,
    })
  })
  // this.db.list("hello").push({
  //   email:
  //   username:
  //   password:
  // })
}

registerstudent(email, password, birthdate, fullname) {
  return this.afAuth.auth.createUserWithEmailAndPassword(
    email,
    password,
  ).then((userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
    return this.db.object("users/" + user.uid).set({
      Birthdate: birthdate,
      Full_Name: fullname,
    })
  })
}
 signOut() {
  this.afAuth.auth.signOut();
}

 getEmail() {
  return this.user && this.user.email;
}


}