import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuEscolhido = 'reactive';
  canSave = false;
  viewMode = 'validacaoAssincrona';

  updateViewMode(valor:string) {
    this.viewMode = valor;
    console.log('teste ' + this.viewMode);
  }
  menusComponentes = [
    {id: 1, link: 'overview', nome: 'Visão Geral'},
    {id: 2, link: 'viewencapsualtion', nome: 'View Encapsulation'},
    {id: 3, link: 'sharingdata', nome: 'Compartilhando Dados'}
  ];

  menusReactive = [
    {id: 1, link: 'visaogeral', nome: 'Reactive Driven'},
    {id: 2, link: 'validacaoCustomizada', nome: 'Validação Customizada'},
    {id: 3, link: 'validacaoAssincrona', nome: 'Validação Assíncrona'}   
  ];
  menusDiretivas = [
    {id: 1, link: 'if'      , nome: 'NgIf'},
    {id: 2, link: 'switch'  , nome: 'NgSwitch'},
    {id: 3, link: 'for'     , nome: 'NgFor'},
    {id: 4, link: 'ngclasse', nome: 'NgClasse'},
    {id: 5, link: 'ngestilo', nome: 'NgStyle'},
  ];

  menusTemplates = [
    {id: 1, link: 'validacao' , nome: 'Validação e Form Control'},
    {id: 2, link: 'ngForm'  , nome: 'ngForm'},
    {id: 3, link: 'ngValue', nome: 'ngValue'}
  ]

  outrosmenus = [
    {id: 1, link: 'ajax' , nome: 'Operações Assíncronas'},
  ]

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

  textoInputP = `
    <p>
      Item do dia: {{ item }}
    </p>
  `

  textoInputCP = `
  <app-item-detail [item]="currentItem"> </app-item-detail>
  `

  textoInputValor = `
  export class AppComponent {
      currentItem = 'Television';
  }
  `

  textoOutputP = `
    //app-item-output é o emissor ou fornecedor do evento newItemEvent
    @Output() newItemEvent = new EventEmitter<string>();

    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }
  `

  textoOutputEF = `
  <label for="item-input"> Add an item: </lable>
  <input type="text" id="item-input" #newItem>
  <button type="button" (click)="addNewItem(newItem.value)"> Add to parent's list </button>
  `

  textoCodigoAddItem = `
  export class AppComponent {
    items = ['item1','item2','item3','item4'];

    addItem(newItem:string) {
        this.items.push(newItem);
    }
  }
  `

  textoCodigoChamada = `
  //app.component é o cliente ou consumidor do evento (newItemEvent)
  <app-item-output (newItemEvent)="addItem($event)"></app-item-output>
  `

  textoExibicao = `
  <ul>
    <li *ngFor="let item of items"> {{item}} </li>
  </ul>
  `

  textoNgModel = `
  <!-- dentro do style.css faça -->
  .form-control.ng-invalid.ng-touched {
    border: 2px solid #ff0000;
  }

  <form>
    <div class="form-group">
    <label for="firstName"> Nome </label>
    <input required ngModel name="firstName" #firstName="ngModel" 
    minlength="3"
    maxlength="10"
    pattern="banana"
    (change)="log(firstName)" 
    type="text" 
    class="form-control" 
    id="firstName">

    <div class="alert alert-danger" *ngIf="firstName.touched && firstName.invalid">
        <div *ngIf="firstName.errors?.['required']"> Nome é obrigatório! </div>    
        <div *ngIf="firstName.errors?.['minlength']"> O nome deve ter pelo menos {{ firstName.errors?.['minlength'].requiredLength }} letras </div> 
        <div *ngIf="firstName.errors?.['pattern']"> O padrão é banana </div> 
    </div>
    </div>
    <div class="form-group">
        <label for="comment">
            Comentário
        </label><textarea ngModel name="comment"  id="comment" cols="30" rows="10" class="form-control"></textarea>

    </div>
    <button class="btn btn-primary">Enviar</button>
  </form>
  `

  textoNgForm = `
  <form #f="ngForm" (ngSubmit)="submit(f)"> 

  ...
  export class ContactFormComponent  {
  ...
  submit(f: any) {
    console.log(f);
  }
  `

  textoNgModelGroup = `
  <form #f="ngForm" (ngSubmit)="submit(f)"> 
    <div ngModelGroup="contato" #contato="ngModelGroup">
        <div *ngIf="contato.valid">
            ...
        </div>
    <div class="form-group">
    <label for="firstName"> Nome </label>

    <input required ngModel name="firstName" #firstName="ngModel">

    ...
    <button class="btn btn-primary" [disabled]="f.invalid">Enviar</button>
  `

  textoObjetoContact = `
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Telefone'}
  ]
  `
  textoSelectBox = `
    <div class="form-group">
      <label for="contactMethod"> Forma de Contato </label>
      <select multiple ngModel name="contactMethod" id="contactMethod" class="form-control">
          <option value=""></option>
          <option *ngFor="let contacts of contactMethods" [value]="contacts.id">
              {{contacts.name}}
          </option>
      </select>
    </div>
  `

  textoNgValue = `
  ...
    <option *ngFor="let contacts of contactMethods" [ngValue]="contacts">
      {{contacts.name}}
    </option>
  ...
  `



  pp = {
    codigo : `  
    import { AbstractControl, ValidationErrors } from "@angular/forms";
  
    export class UsernameValidators {
        
        static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
            if((control.value as string).indexOf(' ') >= 0) 
                return { cannotContainSpace : true };
            return null;
        }
    }
    `,
    titulo : 'Código Validator Customizado',
    pagina : 'username.validators.ts'
  }

  validadorSignUp = {
    codigo: `
    form = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ]),
    `,
    titulo: 'Código 2',
    pagina: 'signup-form.component.ts'
  }
  

  asyncValidatorFn = {
    codigo : `
    interface AsyncValidatorFn {
      (control: AbstractControl<any, any>): Promise<ValidationErrors | null> | 
      Observable<ValidationErrors | null>
    }    
    `,
    titulo : 'Código 1',
    pagina: 'angular.io'
  }

  exemploAsyncValidatorFn = {
    codigo: `
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {

      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if(control.value === 'wos')
                  resolve({shouldBeUnique: true });
              else 
                  resolve(null);
          }, 2000);
      });       
    }
    `,
    titulo: 'Código 2',
    pagina: 'username.validator.ts'
  }

  nomeInput = "nomeTeste";
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
