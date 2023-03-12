import { Component, OnInit } from '@angular/core';
import { DirectiveService } from './directive.service';


@Component({
  selector: 'app-directives',
  // o uso do acento grave (backtick) delimita um template string, introduzido no ecma script 2015
  //o qual permite quebra de linhas literais, também permite interpolar valores sem o uso do +
  template: `
    <h2> {{ title }} </h2>
    <!-- exemplo de property binding [textContent]  recebe um valor do componente -->
    <h1 [textContent]="title">  </h1>
    <table>
      <tr>
        <td [colSpan]="colsSpan"> Save </td>
      </tr>
    </table>
    <button class="btn btn-primary" [class.active]="isActive"> Teste </button>
    <button [style.backgroundColor]="isActive ? 'blue': 'white'"> Update </button>
  
  <div (click)="onClickedDiv()">
    <!-- o $event representa o DOM event que foi passado ao event handler quando o click ocorreu -->
    <button (click)="onSave($event)"> Evento </button>
    </div>
    <ul>
      <!-- abaixo exemplifica-se o uso da diretiva ngFor que utiliza um for para repetir o elemento li
      até o limite do número de cursos  -->

      <!-- sempre que uma diretiva usada muda a estrutura do DOM (adicionando ou removendo elementos)
      é preciso prefixá-la com um asterisco -->
      <li *ngFor="let course of courses">
        <!-- como se trata de variável do ts é preciso usar o marcado de string interpolation -->
        {{ course }} <app-favorite></app-favorite>
      </li>
    </ul>
    <!-- passando o valor digitado através do event target -->
    <input #email (keyup.enter)="onKeyUp(email.value)" />

    <!-- two way binding -->
    <input #emailT [value]="email2" (keyup.enter)="onKeyUpProp(emailT.value)" />
    <!-- two way binding bananaBox -->
    <!-- ngModel é uma diretiva usada para implementar two way binding -->
    <input [(ngModel)]="email3" (keyup.enter)="onKeyUpProp3()" />
    
    `,
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  //CONSTRUCTOR é um inicializador de objetos, aqui passo um parâmetro como uma dependência para o construtor
  //o componente exige um DirectiveService, a qual é instanciada e passada pelo container de DI do angular
  constructor(service: DirectiveService) { 
    //o uso do new produz alto nível de acoplamento do componente com o serviço
    //new DirectiveService
    this.courses = service.getCourses();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = "List of Courses";
  authors = ['fulano','cicrano','beltrano'];
  courses = ['Course1','Course2','Course3'];
  colsSpan = 2;
  isActive = true;
  email2 = 'wos@gmail.com';
  email3 = 'email@email.com';
  onSave($event:any) {
    //o event.stopPropagation() interrompe o event bubbling, evitando assim que o evento que está
    //no elemento acima do button (div) seja chamado onClickedDiv()
    $event.stopPropagation();
    console.log("Button was clicked!", $event);
  }

  onClickedDiv() {
    console.log("div clicked!");
  }

  onKeyUp(email:any){
    console.log(email);
  }

  onKeyUpProp(email2: any) {
    console.log(email2);
  }

  onKeyUpProp3() {
    console.log(this.email3);
  }



}
