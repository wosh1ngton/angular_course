import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-page',
  templateUrl: './diretiva-page.component.html',
  styleUrls: ['./diretiva-page.component.css']
})
export class DiretivaPageComponent {

  // menuEscolhido = '';  
  // viewMode = '';
  menusDiretivas = [
    { id: 1, link: 'if', nome: 'NgIf' },
    { id: 2, link: 'switch', nome: 'NgSwitch' },
    { id: 3, link: 'for', nome: 'NgFor' },
    { id: 4, link: 'ngclasse', nome: 'NgClasse' },
    { id: 5, link: 'ngestilo', nome: 'NgStyle' },
  ];

  // updateViewMode(valor: string) {
  //   this.viewMode = valor;
  //   console.log('teste ' + this.viewMode);
  // }
}
