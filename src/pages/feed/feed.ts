import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeUsuario:string = "Rodrigo Flama";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(a:number, b:number): number{
      //alert(a + b);
      return a + b;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');

    //this.somaDoisNumeros(4, 5);
  }

}
