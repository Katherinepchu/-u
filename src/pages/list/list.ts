import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { LoggedinPage } from "../loggedin/loggedin";

import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { HttpClient } from '@angular/common/http';
import { IMovie } from "../../interface/IMovie";
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  usuarios
  movies = new Array<IMovie>();
  onViewDidLoad
  nombre=""
  items

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor:Proveedor1Provider) {
  this.initializeItems();

    
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


  initializeItems() {
      this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'];
         console.log('Tigrezhito-traeDatos',data)

         },
         (error)=> {console.log(error);}

         )
  }


     getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.usuarios = this.usuarios.filter((title) => {
        return (title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


    
}
