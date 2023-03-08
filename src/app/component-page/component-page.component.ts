import { Component } from '@angular/core';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.css']
})
export class ComponentPageComponent {
  menuEscolhido = '';  
  viewMode = '';
  menusComponentes = [
    { id: 1, link: 'overview', nome: 'Visão Geral' },
    { id: 2, link: 'viewencapsualtion', nome: 'View Encapsulation' },
    { id: 3, link: 'sharingdata', nome: 'Compartilhando Dados' },
    { id: 4, link: 'animations', nome: 'Animations'}
  ];

  updateViewMode(valor: string) {
    this.viewMode = valor;
    console.log('teste ' + this.viewMode);
  }
}
