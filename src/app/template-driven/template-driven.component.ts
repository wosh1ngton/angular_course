import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  menuEscolhido = '';  
  viewMode = '';
  menusTemplates = [
    { id: 1, link: 'validacao', nome: 'Validação e Form Control' },
    { id: 2, link: 'forms', nome: 'ngForm' },
    { id: 3, link: 'ng-values', nome: 'ngValue' }
  ]

  updateViewMode(valor: string) {
    this.viewMode = valor;
    console.log('teste ' + this.viewMode);
  }
}
