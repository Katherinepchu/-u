import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { LoggedinPage } from "../loggedin/loggedin";

import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { HttpClient } from '@angular/common/http';
import { IMovie } from "../../interface/IMovie";
import { HttpClientModule } from '@angular/common/http';
import { Platform, ActionSheetController } from 'ionic-angular';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})

export class ListPage {

  usuarios;
  movies = new Array<IMovie>();
  onViewDidLoad;
  nombre="";

  searchQuery: string = '';
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor:Proveedor1Provider,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public Proveedor1Provider:Proveedor1Provider) {
  this.initializeItems();

    
  }

ionViewDidLoad(){
  this.proveedor.obtenerDatos()
       //his.Proveedor1Provider.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'] ;
         
         console.log('Tigrezhito-traeDatos',data)
         console.log('VIDEO_FILTRADOS_POR_CATEGORIA_ID',data)

         },
         (error)=> {console.log(error);}

         )
    
     }
   goToDetail(movie: IMovie) {
    this.navCtrl.push(LoggedinPage, movie);
  }

  initializeItems() {
      // this.proveedor.obtenerDatos()
      this.Proveedor1Provider.obtenerDatos()
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
      this.usuarios.title = this.usuarios.filter((usuario) => {
        return (usuario.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }







 openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Categoría',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        },

        {
          text: 'Ciencia Ficción',
        
         handler: () => {
           
       this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'] ;
         this.usuarios = this.usuarios.filter(usuario=> usuario.category_id==2)
       

         },

         )
          }
        },


        {
          text: 'Comedia',
        
          handler: () => {

        this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'] ;
         this.usuarios = this.usuarios.filter(usuario=> usuario.category_id==4)

         },

         )
          }
        },


        {
          text: 'Drama',
        
          handler: () => {

       this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'] ;
         this.usuarios = this.usuarios.filter(usuario=> usuario.category_id==5)


         },

         )
          }

        },

        {
          text: 'Suspenso',
        
        handler: () => {

       this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'] ;
         this.usuarios = this.usuarios.filter(usuario=> usuario.category_id==6)
        
         console.log('Suspenso',this.usuarios)

         },

         )

          }
        },


        {
          text: 'Acción',
        
          handler: () => {


       this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'] ;
         this.usuarios = this.usuarios.filter(usuario=> usuario.category_id==7)
         
         console.log('Accion',this.usuarios)

         },


         )
          }
        },


        {
          text: 'Aventura',
        
          handler: () => {


       this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'] ;
         this.usuarios = this.usuarios.filter(usuario=> usuario.category_id==8)
         console.log('Tigrezhito-traeDatos',data)
         console.log('VIDEO_FILTRADOS_POR_CATEGORIA_ID',data)

         },
         (error)=> {console.log(error);}

         )         
         console.log('Cancel clicked');
          }
        },



        {
          text: 'Romance',
        
          handler: () => {


       this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'] ;
         this.usuarios = this.usuarios.filter(usuario=> usuario.category_id==9)
         
         console.log('ROMANCE',this.usuarios)
         },
         (error)=> {console.log(error);}

         )

 
            console.log('ROMACE');
          }
        },



        {
          text: 'Infantil',
        
          handler: () => {


       this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'] ;
         this.usuarios = this.usuarios.filter(usuario=> usuario.category_id==11)
        
         console.log('ROMANCE',this.usuarios)

         },
         (error)=> {console.log(error);}

         )

 
            console.log('INFANTIL');
          }

        },

        {
          text: 'Terror',
        
       handler: () => {
       this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'] ;
         this.usuarios = this.usuarios.filter(usuario=> usuario.category_id==12)
        
         console.log('TERROR',this.usuarios)

         },

         )
          }

        }


      ]
    });
    actionSheet.present();
  } 

}
