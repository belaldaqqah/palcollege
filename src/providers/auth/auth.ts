import { LoginPage } from './../../pages/login/login';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

import firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
 private user: firebase.User;

 constructor(public afAuth: AngularFireAuth,
  private db: AngularFireDatabase
  ) {
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

 registergrad(credentials, birthdate, extraUserInfo) {
  return this.afAuth.auth.createUserWithEmailAndPassword(
    credentials.email,
    credentials.password,
  ).then((userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
    return this.db.object("users/" + user.uid).set({
      Birthdate: birthdate,
      Full_Name: extraUserInfo.fullname,
      university: extraUserInfo.university,
      major: extraUserInfo.major,
    })
  })

}

registerstudent(credentials, birthdate, extraUserInfo) {
  return this.afAuth.auth.createUserWithEmailAndPassword(
    credentials.email,
    credentials.password,
  ).then((userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
    return this.db.object("users/" + user.uid).set({
      Birthdate: birthdate,
      Full_Name: extraUserInfo.fullname,
      Highschool: extraUserInfo.highschool,
    })
  })
}

post(title, content){
  return this.afAuth.auth
}

 signOut() {
  return this.afAuth.auth.signOut();
}

 getEmail() {
  return this.user && this.user.email;
}


getUid() {
  return this.user && this.user.uid;
}

getExtraUserData() {
  return this.db.object('users/' + this.getUid()).valueChanges();
}




}