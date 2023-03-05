import { Component } from '@angular/core';

@Component({
  selector: 'app-outros-page',
  templateUrl: './outros-page.component.html',
  styleUrls: ['./outros-page.component.css']
})
export class OutrosPageComponent {
  outrosmenus = [
    { id: 1, link: 'ajax', nome: 'Operações Assíncronas' },
    { id: 2, link: 'injecao', nome: 'Injeção de Dependência' },
    { id: 3, link: 'observables', nome: 'Observables' },
    { id: 4, link: 'promisse', nome: 'Promisse' },
    { id: 5, link: 'lifecycle', nome: 'Lyfecycle hooks' },
    { id: 6, link: 'erros', nome: 'Tratamento de Erros' },
    { id: 7, link: 'deploy', nome: 'Deploy' },
  ]
}
