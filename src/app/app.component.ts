import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuEscolhido = 'Diretivas';

  viewMode = 'for';
  title = 'angular-course';
  post = {
    title : "title",
    isFavorite : false
  }
  courses : number[] = [];
  cursos = [
    {id: 1, nome: 'curso 1'},
    {id: 2, nome: 'curso 2'},
    {id: 3, nome: 'curso 3'},
    {id: 4, nome: 'curso 4'},
  ]
  onFavoriteChanged(eventArgs:{}) {
    console.log("favorite changed!",eventArgs);
  }

  items = ['item1','item2','item3'];
  
  tweet = {
    post : "exemplo de tweet",
    isLiked : true,
    totalLikes : 0
  };
  totalCursos = this.courses.length;
  addItems(value:string) {
    this.items.push(value);
  }

  textoHtml = `
      <div *ngIf="courses.length > 0" class="p-3 bg-light text-primary border border-primary">
        Lista de Cursos
      </div>

      <div *ngIf="courses.length == 0" class="p-3 bg-light text-danger border border-danger">
        Ainda não há cursos
      </div> `

  textoHtmlIfNGTemplate = `
    <div *ngIf="courses.length > 0; then coursesList else noCourses"> </div>

    <ng-template #coursesList class="border border-primary text-primary">
      <div class="border border-primary text-primary-3 p-3"> Lista de Cursos </div>               
    </ng-template>

    <ng-template #noCourses>
      <div class="border border-danger text-danger p-3"> Ainda não há cursos </div> 
    </ng-template>
  `

  textoHtmlHidden = `
      <div [hidden]="courses.length == 0" class="text-primary border border-primary p-3">
          Lista de cursos
      </div>

      <div [hidden]="courses.length > 0" class="text-danger border border-danger p-3">
          Ainda não há cursos
      </div>
  `

  textoSwitchCase = `
      <ul class="nav nav-tabs">
        <li class="nav-item"> 
          <a href="#" class="nav-link" [class.active]="testeSwitch == 'mapa'" (click)="testeSwitch = 'mapa'">Mapa</a>  
        </li>
        <li class="nav-item"> 
          <a href="#" class="nav-link" [class.active]="testeSwitch == 'lista'" (click)="testeSwitch = 'lista'">Lista</a> 
        </li>
        <li class="nav-item"> 
          <a href="#" class="nav-link" [class.active]="testeSwitch == 'outros'" (click)="testeSwitch = 'outros'">Outros</a> 
        </li>
      </ul>

      <div [ngSwitch]="testeSwitch">
        <div *ngSwitchCase="'mapa'" class="p-2"> Conteúdo de Mapa </div>
        <div *ngSwitchCase="'lista'" class="p-2"> Conteúdo de Lista </div>
        <div *ngSwitchCase="'outros'" class="p-2"> Conteúdo de Outros </div>
      </div>
  `

  textoFor = `
        <ul class="list-group list-group-flush">            
          <li class="list-group-item" *ngFor="let curso of cursos; let i = index; let isEven = even; let isOdd = odd">

            <div *ngIf="switchImpar == true; then impares; else null;"> </div>
            <div *ngIf="switchPar == true; then pares; else null;"> </div>
            <div *ngIf="switchPar == false && switchImpar == false; then todos; else null;"> </div>

            <ng-template #impares>
                <span *ngIf="isEven"> <span [hidden]="mySwitch == false"> {{ i }} - </span> {{ curso.nome }}  </span>
            </ng-template>

            <ng-template #pares>
              <span *ngIf="isOdd"> <span [hidden]="mySwitch == false"> {{ i }} - </span> {{ curso.nome }} </span>
            </ng-template>

            <ng-template #todos>
              <span> <span [hidden]="mySwitch == false"> {{ i }} - </span> {{ curso.nome }}  </span>
            </ng-template>              
          </li>
        </ul>
  `
  testeSwitch = 'mapa';
  onKeyUp(valor:string) {
    var numberValue = Number(valor)
    this.courses = [];
    if (numberValue > 0) 
      this.courses.push(numberValue);

  }

  onClickSendTotal(valor:string) {
    var numberValue = Number(valor);
    this.cursos = [];
    for (let index = 0; index < numberValue; index++) {
      this.cursos.push({id: index, nome: 'Curso ' + index});      
    }
  }
  mySwitch : boolean = false;
  switchPar : boolean = false;
  switchImpar : boolean = false;
  
}
