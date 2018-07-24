import { Component } from '@angular/core';
// tslint:disable-next-line:no-unused-variable
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
* Generated class for the ModalPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
 selector: 'page-post',
 templateUrl: 'post.html',
})
export class PostPage {

 constructor(private navParams: NavParams,private view:ViewController) {


 }
 closeModal(){
   this.view.dismiss();
 }

}