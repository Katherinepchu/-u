import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { LoggedinPage } from "../loggedin/loggedin";

import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { IMovie } from "../../interface/IMovie";
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  usuarios = new Array<IMovie>();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor:Proveedor1Provider) {
    
  }

ionViewDidLoad(){
       this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'];
         console.log('Tigrezhito-traeDatos',data)

         },
         (error)=> {console.log(error);}

         )
     }


   goToDetail(movie: IMovie) {
    this.navCtrl.push(LoggedinPage, movie);
  }



    
}
