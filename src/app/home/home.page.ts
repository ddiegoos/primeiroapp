import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // objeto nav controler para chamar uma tela
  // metodo abrir tela para carregar uma tela
  constructor(public navCtrl: NavController) {}

  //o abrirtela tem uma parametro que é o "page", para que um metodo consiga abrir varias telas
  // porém no html tem que usar o (click)="abrirtela('nome do arquivo que será aberto')"
  abrirtela(page){
    this.navCtrl.navigateForward(page)
  }


}


