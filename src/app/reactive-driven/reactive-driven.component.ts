import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.css']
})
export class ReactiveDrivenComponent {
  menusReactive = [
    { id: 1, link: 'visaogeral', nome: 'Reactive Driven' },
    { id: 2, link: 'validacaoCustomizada', nome: 'Validação Customizada' },
    { id: 3, link: 'validacaoAssincrona', nome: 'Validação Assíncrona' },
    { id: 4, link: 'validacaoForm', nome: 'Validação de Formulário' },
    { id: 5, link: 'FormArray', nome: 'FormArray' },
    { id: 6, link: 'FormBuilder', nome: 'FormBuilder' },
  ];
 
}
