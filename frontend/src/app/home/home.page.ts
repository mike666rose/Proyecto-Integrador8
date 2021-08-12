import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private navCtrl: NavController) {

  

}

goToPagina2(){
  this.navCtrl.navigateForward('/posts');
}

goToPagina1(){
  this.navCtrl.navigateForward('/blog');
}
goToPagina3(){
  this.navCtrl.navigateForward('/contact');
}
goToPagina4(){
  this.navCtrl.navigateForward('/about');
}



}
