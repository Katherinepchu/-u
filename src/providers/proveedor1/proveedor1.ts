import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { IMovie } from "../../interface/IMovie";
import { Storage } from '@ionic/storage';


/*
  Generated class for the Proveedor1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Proveedor1Provider {
  private baseUrl: string = "http://videos.eventoz.tv/api/read.php?username=";
  movies: IMovie[];
  usuario
  user:any;
  constructor(public storage:Storage,public http: HttpClient) {




   storage.get('usuario').then((val) => {

   this.user=val
  

  });

    console.log('Hello Proveedor1Provider Provider');
  



  }


  obtenerDatos(){
  	/*return this.http.get('http://videos.eventoz.tv/api/read.php?username=jrlq');*/
  	return this.http.get('http://videos.eventoz.tv/api/read.php?username='+this.user).map(res => res );
  }

  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
