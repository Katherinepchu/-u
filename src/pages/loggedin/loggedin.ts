import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoriteMovieProvider } from "../../providers/favorite-movie/favorite-movie";
import { IMovie } from "../../interface/IMovie";

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {
  movie: IMovie;
  isFavorite: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private favoriteMovieProvider: FavoriteMovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
    this.movie = this.navParams.data;
    this.favoriteMovieProvider
      .isFavortieMovie(this.movie)
      .then(value => (this.isFavorite = value));
  }

  

}
