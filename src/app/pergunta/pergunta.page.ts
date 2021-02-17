import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.page.html',
  styleUrls: ['./pergunta.page.scss'],
})
export class PerguntaPage implements OnInit {
  //variaveis
public questoes: any;
public pergunta: string;
public opcao01: string
public opcao02: string
public opcao03: string
public opcao04: string
public opcao05: string
public numero: number=0;
public resposta: string;
public respostaescolhida: string;
public respostacerta: any=0;
public respostaerrada: any=0;

  constructor(public navCtrl: NavController) { }

  // carregar perguntas use o ngoninit
  ngOnInit() {
    this.iniciarpergunta();
    this.carregarpergunta()
  
  }
  //carrega quando recebe algum foco
  ionViewWillEnter(){
    this.inicio()

  }


   //variavel questoes que contem objetos que sao pergunta, resposta, op01 e etc 
  iniciarpergunta(){
    this.questoes =[
      {
        id:'1',
        pergunta:'Quem era o lider da França Fascista ?',
        resposta:'1',
        op01:'Benito Mussolini',
        op02:'Adolf Hitler',
        op03:'Paul von Hindenburg',
        op04:'Lênin',
        op05:'Thomas Woodrow Wilson'
      },
      {
        id:'2',
        pergunta:'Quem era o Presidente dos Estados Unidos no periodo da Segunda Guerra Mundial ?',
        resposta:'4',
        op01:'Benito Mussolini',
        op02:'John Nance Garner',
        op03:'Harry S. Truman',
        op04:'Franklin D. Roosevelt',
        op05:'Thomas Woodrow Wilson'
      },
      {
        id:'3',
        pergunta:'Em que ano se passou a Primeira Guerra Mundial ?',
        resposta:'1',
        op01:'1914 e 1918',
        op02:'1915 e 1919',
        op03:'1916 e 1922',
        op04:'1913 e 1917',
        op05:'1910 e 1915'
      },
      {
        id:'4',
        pergunta:'Quais os paises se declaram "neutro" na Segunda Guerra Mundial ?',
        resposta:'2',
        op01:'Canada, Austria e Coreia',
        op02:'Suíça, Portugal e Espanha',
        op03:'Argentina, Brasil e Peru ',
        op04:'Bolivia, Austria e Portugal',
        op05:'Chile, Canada e Portugal'
      },
      {
        id:'5',
        pergunta:'Quem foi Primeiro-Ministro do Reino Unido ?',
        resposta:'3',
        op01:'Lenin',
        op02:'John Nance Garner',
        op03:'Winston Churchill',
        op04:'Franklin D. Roosevelt',
        op05:'Thomas Woodrow Wilson'
      },
      {
        id:'6',
        pergunta:'Quem era o lider dos Bolchevique ?',
        resposta:'5',
        op01:'Stalin',
        op02:'Karl',
        op03:'Martov',
        op04:'Churchill',
        op05:'Lenin'
      },
      {
        id:'7',
        pergunta:'Quem era o lider dos Mencheviques ?',
        resposta:'3',
        op01:'Stalin',
        op02:'Karl',
        op03:'Martov',
        op04:'Churchill',
        op05:'Lenin'
      },
      {
        id:'8',
        pergunta:'Qual foi a Guerra que teve mais morte ?',
        resposta:'3',
        op01:'Primeira Guerra Mundial',
        op02:'Guerra Fria',
        op03:'Conquistas e invasões mongóis',
        op04:'Conquista da América',
        op05:'Segunda Guerra Sino-Japonesa'
      },
      {
        id:'9',
        pergunta:'Quem foi o Presidente do Brasil em 1945 ?',
        resposta:'1',
        op01:'Gertulio Vargas',
        op02:'Juscelino Kubitschek',
        op03:'João Gulart ',
        op04:'Tangredo Neves',
        op05:'Arthur da Costa Silva'
      },
      {
        id:'10',
        pergunta:'Em que pais Nasceu o Borão Vermelho ?',
        resposta:'3',
        op01:'Estados Unidos',
        op02:'Russia',
        op03:'Alemanha',
        op04:'Inglaterra',
        op05:'França'
      },
      
    ]

  }
  // faz com que uma variavel seja atrelada a outra variavel com objeto para poder ser utilizado no html
  carregarpergunta(){
    this.pergunta= this.questoes[this.numero].pergunta;
    this.opcao01= this.questoes[this.numero].op01;
    this.opcao02= this.questoes[this.numero].op02;
    this.opcao03= this.questoes[this.numero].op03;
    this.opcao04= this.questoes[this.numero].op04;
    this.opcao05= this.questoes[this.numero].op05;
    this.resposta= this.questoes[this.numero].resposta;

  }

  proximo(){

    if(this.respostaescolhida == this.resposta){
      this.respostacerta++
    }else{
      this.respostaerrada++
    }

    if(this.numero >= 9 ){
      //guarda o resultado no local host, para ser utilizado na pagina resultado
      localStorage.setItem('acerto', this.respostacerta)
      localStorage.setItem('erros', this.respostaerrada)


    //chama a tela de resultado
      this.navCtrl.navigateForward('resultado')

    }else{
      this.numero++
      this.carregarpergunta();
    }

  }

  carregarresposta(valor){
    this.respostaescolhida = valor;

  }

  inicio(){
    this.numero=0;
    this.respostacerta=0;
    this.respostaerrada=0;
    this.carregarpergunta();
  }

}
