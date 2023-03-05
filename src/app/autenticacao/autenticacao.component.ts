import { Component } from '@angular/core';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent {
  menusAutenticacao = [
    { id: 1, link: 'visaogeral', nome: 'Visão Geral' },
    { id: 2, link: 'cliente', nome: 'Cliente' },
    { id: 3, link: 'servidor', nome: 'Servidor' },
    { id: 4, link: 'autorizacao', nome: 'Autorização' }
  ];
  
}
