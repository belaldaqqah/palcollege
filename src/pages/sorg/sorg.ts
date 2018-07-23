import { RegisterPage } from './../registerStudent/registerStudent';
import { RegisterGradPage } from './../register-grad/register-grad';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SorgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sorg',
  templateUrl: 'sorg.html',
})
export class SorgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SorgPage');
  }

  students() {
    this.navCtrl.push(RegisterPage);
  }
  graduates() {
    this.navCtrl.push(RegisterGradPage);
  }
}
