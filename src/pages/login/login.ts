import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';
import { Storage } from '@ionic/storage';
import { ListPage } from '../list/list';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  inputtext:string;
  key:string='username';
 
  @ViewChild('username') user;
  @ViewChild('password') password;
  constructor(private alertCtrl: AlertController,private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage)
  
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

saveData(){
this.storage.set('usuario', this.inputtext)
 .then( data => {
      console.log('got some data', this.storage.set);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( ListPage );
      // user is logged in
    })



}



}
  