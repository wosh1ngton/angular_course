import { Component, OnInit } from '@angular/core';
import { DirectiveService } from './directive.service';

@Component({
  selector: 'app-directives',
  // o uso do acento grave (backtick) delimita um template string, introduzido no ecma script 2015
  //o qual permite quebra de linhas literais, também permite interpolar valores sem o uso do +
  template: `
    <h2> {{ title }} </h2>
    <ul>
      <!-- abaixo exemplifica-se o uso da diretiva ngFor que utiliza um for para repetir o elemento li
      até o limite do número de cursos  -->

      <!-- sempre que uma diretiva usada muda a estrutura do DOM (adicionando ou removendo elementos)
      é preciso prefixá-la com um asterisco -->
      <li *ngFor="let course of courses">
        <!-- como se trata de variável do ts é preciso usar o marcado de string interpolation -->
        {{ course }}
      </li>
    </ul>
    `,
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  //CONSTRUCTOR é um inicializador de objetos
  constructor(service: DirectiveService) { 
    this.courses = service.getCourses();
  }
  title = "List of Courses";
  courses = ['Course1','Course2','Course3'];
  ngOnInit(): void {
  }

}
