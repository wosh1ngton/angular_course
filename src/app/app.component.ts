import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuEscolhido = 'Componente';
  canSave = false;
  viewMode = 'overview';

  updateViewMode(valor:string) {
    this.viewMode = valor;
    console.log('teste ' + this.viewMode);
  }
  menusComponentes = [
    {id: 1, link: 'overview', nome: 'Visão Geral'},
    {id: 2, link: 'viewencapsualtion', nome: 'View Encapsulation'},
    {id: 3, link: 'sharingdata', nome: 'Compartilhando Dados'}
  ];
  menusDiretivas = [
    {id: 1, link: 'if'      , nome: 'NgIf'},
    {id: 2, link: 'switch'  , nome: 'NgSwitch'},
    {id: 3, link: 'for'     , nome: 'NgFor'},
    {id: 4, link: 'ngclasse', nome: 'NgClasse'},
    {id: 5, link: 'ngestilo', nome: 'NgStyle'},
  ];

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

  //items = ['item1','item2','item3'];
  
  tweet = {
    post : "exemplo de tweet",
    isLiked : true,
    totalLikes : 0
  };
  totalCursos = this.courses.length;
  // addItems(value:string) {
  //   this.items.push(value);
  // }

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

  textoTrackBy = `
      <ul>
        <li *ngFor="let items of item; trackBy: trackItem">
          {{ item.nome }}
        </li>
      </ul>

      trackItem(index, item) {
        return item ? item.id : undefined;
      }
  `

  textNgIfSemAsterisco = `
        <div *ngIf="cursos.length > 0; else semCursos">
          Lista de Cursos
        </div>

        <!-- Ficaria assim -->

        <ng-template [ngIf]="cursos.lenght > 0">
            <div>
                Lista de cursos
            </div>
        </ng-template>
        <ng-template [ngIf]="!(cursos.lenght > 0)">
            Nenhum cursos
        </ng-template>
  `

  textoClassBinding = `
      <i (click)="onClick()" [class.bi-star-fill]="favorito" [class.bi-star]="!favorito" class="h4 mt-3"></i> 
  `

  textoNgClass = `
      <i (click)="onClick()" 
          [ngClass]="{
              'bi-star-fill' : favorito,
              'bi-star' : !favorito
          }"
          class="h4 mt-3">
      </i> 
  `

  textoExpressaoClassBinding = `
  <i (click)="onClick()" [class]="{'bi-star-fill' : favorito, 'bi-star' : !favorito}" class="h4 mt-3"></i> 
  `

  textoEncapsulation = `
        <!-- HTML gerado automaticamente: -->

        <h1 _ngcontent-lia-c47=""> teste</h1>

        <!-- CSS gerado automaticamente -->

        h1[_ngcontent-lia-c47] {
            color: red;
        }
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

  trackby(index: number, curso: any) {
    return curso ? curso.id  : undefined;
  }
  mySwitch : boolean = false;
  switchPar : boolean = false;
  switchImpar : boolean = false;
  
}
