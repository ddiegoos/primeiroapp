import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  public certo: any = localStorage.getItem('acerto')
  public errado: any = localStorage.getItem('erros')

  constructor(public navCtrl: NavController) { }

  ngOnInit() {

  }

  telahome(){
    this.navCtrl.navigateForward('home')
  }

}
