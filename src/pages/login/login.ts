import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

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
  // key:string='username';
 
 // @ViewChild('username') user;
  @ViewChild('password') password;
  constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage)
  
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



saveData(){ 
  
  
let loader =this.loadingCtrl.create({
  content: 'Cargando Peliculas',
  duration :3000
  
})

loader.present();
this.navCtrl.setRoot( ListPage );
this.storage.set('usuario', this.inputtext);

      // user is logged in


}
}