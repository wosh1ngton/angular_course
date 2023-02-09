import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuEscolhido = '';
  canSave = false;
  viewMode = '';
  archives = [
    {'year': 2020, 'month': 1},
    {'year': 2020, 'month': 2},
    {'year': 2020, 'month': 3},
  ]
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
    {id: 3, link: 'validacaoAssincrona', nome: 'Validação Assíncrona'},
    {id: 4, link: 'validacaoForm', nome: 'Validação de Formulário'},
    {id: 5, link: 'FormArray', nome: 'FormArray'},
    {id: 6, link: 'FormBuilder', nome: 'FormBuilder'},
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

  menuServices = [
    {id: 1, link: 'servicos' , nome: 'Serviços'},
    {id: 2, link: 'get' , nome: 'HTTPClient.Get'},
    {id: 3, link: 'post' , nome: 'HTTPClient.Post'},
    {id: 4, link: 'patch' , nome: 'HTTPClient.Patch'},
    {id: 5, link: 'delete' , nome: 'HTTPClient.Delete'},
    {id: 6, link: 'dataservice' , nome: 'Data Service'},
  ]

  outrosmenus = [
    {id: 1, link: 'ajax' , nome: 'Operações Assíncronas'},
    {id: 2, link: 'injecao' , nome: 'Injeção de Dependência'},
    {id: 3, link: 'observables' , nome: 'Observables'},
    {id: 4, link: 'promisse' , nome: 'Promisse'},
    {id: 5, link: 'lifecycle' , nome: 'Lyfecycle hooks'},
    {id: 6, link: 'erros' , nome: 'Tratamento de Erros'},
  ]
  menusRouters = [
    {id: 1, link: 'geral' , nome: 'Visão Geral'},
    {id: 2, link: 'ordem' , nome: 'Informações de rota'},
    {id: 3, link: 'querystring' , nome: 'Parâmetros Opcionais'},
  ]

  menusFollowers = [
    {id: 1, link: '/followers' , nome: 'Followers'},
    {id: 1, link: '/posts' , nome: 'Posts'},
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
  };

  erroUsuarioSenha = {
    codigo: `
      login() {
        this.form.setErrors({
          invalidLogin: true
        });  
      }
    `,
    titulo: 'Código 1',
    pagina: 'signup-form.component.ts'
  };

  erroUsuarioSenhaTemplate = {
    codigo: `
    <form [formGroup]="form" (ngSubmit)="login()">
      <div *ngIf="form.errors" class="alert alert-danger">
          Usuário ou senha inválidos!
      </div>

    ...
    `,
    titulo: 'Código 2',
    pagina: 'signup-form.component.html'
  };


  t = {
    codigo: `
    signup-form.component.ts
  
      form = new FormGroup({
        username: new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
        password : new FormControl('',Validators.required)
      });
  
      ....
  
    signup-form.component.html
  
    <form [formGroup]="form">
      <div class="form-group">
          <label for="username">  Usuário </label>
          <input formControlName="username" type="text" id="username" class="form-control">
          <div *ngIf="username!.invalid && username!.touched" class="alert alert-danger">
            <div *ngIf="username!.errors?.['required']">Username é obrigatório</div>
            <div *ngIf="username!.errors?.['minlenght']">Pelo menos {{username!.errors?.['minlenght'].requiredLength}} caracteres devem ser informados</div>
          </div>
      </div>
      <div class="form-group">
          <label for="password"> Senha </label>
          <input formControlName="password" type="text" id="password" class="form-control">
      </div>
      <div class="form-group pt-3">
      <button class="btn btn-primary"> Logar </button>
    </div>
    </form>
  
    `,
    titulo: 'Código 1',
    pagina: 'p1'

  };

  codigoSimplificado = {
    codigo : `
    get username() {
      return this.form.get('username');
    }

    get password() {
      return this.form.get('password');
    }
  `,
    titulo: 'Código 2',
    pagina: 'p2'
  };

  codigoFormGroupAninhado = {
    codigo: `
    form = new FormGroup({
      account: new FormGroup({
        username: new FormControl('',[
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace
        ], 
        UsernameValidators.shouldBeUnique),
        password : new FormControl('',Validators.required)
      }) 
    });
    `,
    titulo: 'Código 3 - Form Group Aninhado Componente',
    pagina: 'signup-form.component.ts'
  };

  codigoFormGroupTemplate = {
    codigo: `
    <div formGroupName="account">    
    <div class="form-group">
        <label for="username">  Usuário </label>
        <input formControlName="username" type="text" id="username" class="form-control">
        <div *ngIf="username!.pending"> Checando por valor único </div>        
    </div>
    <div class="form-group">
        <label for="password"> Senha </label>
        <input formControlName="password" type="text" id="password" class="form-control">
    </div>
    </div>
    `,
    titulo: 'Código 4 - Form Group Aninhado Template',
    pagina: 'signup-form.component.html'
  };

  codigoFormArray = {
    codigo: `
      form = new FormGroup({
        topics: new FormArray([])
      });
    `,
    titulo: 'Código 1 - Criando o FormArray',
    pagina: 'gerador-objetos.component.ts'
  };


  codigoAddTopicoFormArray = {
    codigo: `
      get topics() {
        return this.form.get('topics') as FormArray;
      }

      addTopic(topic: HTMLInputElement) {
        this.topics.push(new FormControl(topic.value));
        topic.value='';
      }

      removeTopic(topic: AbstractControl) {
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
      }
    `,
    titulo: 'Código 2 - Criando os métodos de adição no FormArray',
    pagina: 'gerador-objetos-component.ts'
  };

  codigoFrontEndFormArray = {
    codigo: `
    <form>
      <input type="text" class="form-control" (keyup.enter)="addTopic(topic)" #topic>
      <ul class="list-group">
          <li 
              *ngFor="let topic of topics.controls" 
              class="list-group-item" 
              (click)="removeTopic(topic)">     
                    
              {{ topic.value }}
          </li>
      </ul>
    </form>
    `,
    titulo: 'Código 3 - Template do FormArray',
    pagina: 'gerador-objetos.component.html'
  };

  codigoFormBuilder = {
    codigo: `
    form = new FormGroup({
      name: new FormGroup('', Validators.required),
      contact: new FormGroup({
        email: new FormControl(),
        phone: new FormControl()
      }),
      topics: new FormArray([])
    });

    constructor(fb: FormBuilder){
      this.form = fb.group({
        name: ['', Validators.required],
        contact: fb.group({
          email: [],
          phone: []
        })
      })
    }
    `,
    titulo: 'Código 1 - Utilizando o FormBuilder',
    pagina: 'exemplo.component.ts'
  };

  codigoHttpClientGet = {
    codigo: `
    export class PostComponent implements OnInit {
      posts: any[] = [];
      constructor(http: HttpClient) {
          http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(response => {
              this.posts = response as any;
            });
       }   
      
    }    
    `,
    titulo: 'Código 1 - Chamada ao método get()',
    pagina: 'post.component.ts'

  };


  codigoHttpClientPost = {
    codigo: `
    createPost(input: HTMLInputElement) {
      let post: any = {
        title: input.value,
       
      };
      input.value = '';
      //post também retorna um observable, assim como todos os métodos HTTPClient
      this.http.post(this.url, JSON.stringify(post))
        .subscribe((response: any) => {        
          post.id = response.id;
          //para adicionar no início use splice, para o fim utilize push
          this.posts.splice(0, 0, post);
        })
    }
    `,
    titulo: 'Código 1 - post()',
    pagina: 'post.component.ts'

  };


  codigoHttpClientPatch = {
    codigo: `
    updatePost(post: HTMLInputElement) {
      this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
        .subscribe(response => {
          console.log(response);
        })
    }
    `,
    titulo: 'Código 1 - HttpClient patch',
    pagina: 'post.component.ts'
  };

  codigoHttpClientDelete = {
    codigo: `
    deletePost(post: HTMLInputElement) {
      this.http.delete(this.url + '/' + post.id)
        .subscribe(response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);        
        })
    }
    `,
    titulo: 'Código 1 - HttpDelete',
    pagina: 'post.component.ts'
  };

  postService = {
    codigo: `
    export class PostService {
      private url = 'https://jsonplaceholder.typicode.com/posts';
      constructor(private http: HttpClient) { }
    
      getPosts() {
        return this.http.get(this.url);
      }
    
      deletePost(id: string) {
        return this.http.delete(this.url + '/' + id);
      }
    
      updatePost(post:any) {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
      }
    
      createPost(post:any) {
        return this.http.post(this.url, JSON.stringify(post));
      }
    }
    
    `,
    titulo: 'Código 1 - Serviço de acesso a dados',
    pagina: 'post.service.ts'
  };

  postComponent = {
    codigo: `
    export class PostComponent implements OnInit {
      posts: any[] = []; 
      
      constructor(private service: PostService) { }
    
      createPost(input: HTMLInputElement) {
        let post: any = {
          title: input.value,
         
        };
        input.value = '';
        //post também retorna um observable, assim como todos os métodos HTTPClient
        this.service.createPost(post)
          .subscribe((response: any) => {        
            post.id = response.id;
            //para adicionar no início use splice, para o fim utilize push
            this.posts.splice(0, 0, post);
          })
      }
    
      updatePost(post: HTMLInputElement) {
        this.service.updatePost(post)
          .subscribe(response => {
            console.log(response);
          })
      }
    
      deletePost(post: HTMLInputElement) {
        this.service.deletePost(post.id)
          .subscribe(response => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);        
          })
      }
      ngOnInit(): void {    
        this.service.getPosts()
          .subscribe(response => {
          this.posts = response as any;
        });
      }
    
    }
    `,
    titulo: 'Código 2 - Lógica de apresentação',
    pagina: 'post.component.ts'
  };

  chamadaSubscribe = {
    codigo: `
    ngOnInit(): void {    
      this.service.getPosts()
        .subscribe({
          next: (response) => {
            this.posts = response as any;        
          }, 
          error: (e) => {
            alert('erro');
            console.log(e);
          }
        });     
    }
    `,
    titulo: 'Código 1 - chamada subscribe',
    pagina: 'exemplo.component.ts'
  };

  subscribeComErros = {
    codigo: `
    CreatePost(input: HTMLInputElement) {
      let post: any = {
        title: input.value,
       
      };
      input.value = '';
      //post também retorna um observable, assim como todos os métodos HTTPClient
      this.service.createPost(post)
        .subscribe({
            next : (response: any) => {        
            post.id = response.id;
            //para adicionar no início use splice, para o fim utilize push
            this.posts.splice(0, 0, post);
          },
          error : (e: Response) => {
            if(e.status === 400) {
              // this.form.setErrors(e) 
            } 
            else {
              console.log("um erro inesperado ocorreu " + e);
            }
          }    
      })
    }
    `,
    titulo : 'Código 1 - Subscribe com erros',
    pagina: 'post.component.ts'
  };

  codigoPipeCatchError = {
    codigo  : `
    deletePost(id: string) {
      return this.http.get(this.url + '/' + id)
        .pipe(
          map((n:any) => {
              return n
            }),
          catchError((err: Response) => { 
            if(err.status === 404) {            
              throw (new NotFoundError());
            }                      
            throw (new AppError(err));
          })
        )   
    }
    `,
    titulo: 'Código 2 - Erros no service',
    pagina: 'post.service.ts'
  };

  codigoErroPostComponent = {
    codigo: `
    deletePost(post: HTMLInputElement) {
      this.service.deletePost("8000")
        .subscribe({
          next : (response) => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);        
          },
          error: (e: AppError) => { 
            if(e instanceof NotFoundError) {
              alert('Este post já foi deletado');            
            }
            else {
              console.log("Um erro inesperado ocorreu" + e);
            }
          }    
      })
    }
    `,
    titulo: 'Código 3 - tratamento do erro no componente',
    pagina: 'post.component.ts'
  };


  codigoAppErrorHandler = {
    codigo: `
    import { ErrorHandler } from "@angular/core";

    export class AppErrorHandler implements ErrorHandler {
        
        handleError(error: any): void {
            alert("Um erro inesperado ocorreu");
            console.log(error);
        }
    
    }
    `,
    titulo: 'Código 4 - Error Handler global',
    pagina: 'app-error.ts'
  };

  codigoProviderErrorHandler = {
    codigo: `
    [...]
    providers: [
      DirectiveService,
      {provide: ErrorHandler, useClass: AppErrorHandler}
    ]
    ...
    ,
    `,
    titulo: 'Código 5 - Provider Error Handler',
    pagina: 'app.module.ts'
  };

  codigoThrowErrorHandler = {
    codigo: `
    deletePost(post: HTMLInputElement) {
      this.service.deletePost("8000")
        .subscribe({
          next: (response) => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
          },
          error: (e: AppError) => {
            if (e instanceof NotFoundError) {
              alert('Este post já foi deletado');
            }
            else throw e;
          }
        })
    }


    ngOnInit(): void {
      this.service.getPosts()
        .subscribe((response) => {
            this.posts = response as any;
          })
        }
      }
    `,
    titulo: 'Código 6 - Error Handler throw',
    pagina: 'post.component.ts'
  };

  codigoDataService = {
    codigo: `
    import { HttpClient } from '@angular/common/http';
    import { Injectable, InjectionToken, Input } from '@angular/core';
    import { throwError } from 'rxjs';
    import { catchError, map } from 'rxjs/operators';
    import { AppError } from './common/app-error';
    import { BadInput } from './common/bad-input';
    import { NotFoundError } from './common/not-found.error';

    export const MY_TOKEN = new InjectionToken<string>('MyToken');

    @Injectable({
      providedIn: 'root',
      useValue: MY_TOKEN
    })
    export class DataService {
      //@Input() private url: string = '';
      
      constructor(private url: string, private http: HttpClient) { }
      

      getAll() {
        return this.http.get(this.url)
          .pipe(         
              catchError(this.handleError)
          );
      }

      delete(id: string) {
        return this.http.get(this.url + '/' + id)
          .pipe(      
            catchError(this.handleError)
          )   
      }

      update(resource:any) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
          .pipe(       
            catchError(this.handleError)
          );
      }

      create(resource:any) {
        return this.http.post(this.url, JSON.stringify(resource))
          .pipe(        
            catchError(this.handleError)
          );
      }

      //Response é uma interface que busca dados via um request http
      private handleError(err: Response) {
        if(err.status === 400) 
          return throwError(() => new BadInput(err));

        if(err.status === 404)             
          return throwError(() => new NotFoundError());                          
        return throwError(() => new AppError(err));
      }

    }
  
    `,
    titulo: 'Código 1 - Data Service',
    pagina: 'data.service.ts'
  };

  codigoRotas = {
    codigo: `
    const routes : Routes = [
      {path: '', component: HomeComponent },
      {path: 'profile/:username', component: PerfilComponent },
      {path: 'followers', component: FollowersComponent },      
      {path: 'posts', component: PostComponent },
      {path: '**', component: NotFoundComponent },
    ]
    `,
    titulo: 'Código 1 - constante de rotas',
    pagina: 'app.module.ts'
  };

  codigoRouterLink = {
    codigo: `
    <!-- chamada comum de um elemento estático -->
      <a class="nav-link" routerLink="/followers">

    <!-- chamada de um elemento dinâmico de uma lista de links gerados dinamicamente - property binding em ação -->
    <ul class="navbar-nav">        
      <li class="nav-item" *ngFor="let menu of subMenus">           
        <a class="nav-link" 
        [routerLink]="menu.link">
            {{ menu.nome }}
        </a>
      </li>         
    </ul>

    <!-- chamada a uma rota dinâmica, são dois parâmetros: a rota e depois os parâmetros da rota -->
    <a [routerLink]="['/followers', follower.id]">
    `,
    titulo: 'Código 2 - roteamento',
    pagina: 'diversas'
  };

  codigoAcessoParamRoute = {
    codigo: `
    export class PerfilComponent implements OnInit {

      constructor(private route: ActivatedRoute) { }
    
      ngOnInit(): void {
        this.route.paramMap
          .subscribe(params => {
            let id = params.get('id');
            console.log(id);
          });
      }    
    }    
    `,
    titulo: 'Parâmetros de rotas',
    pagina: 'perfil.component.ts'
  };

  codigoMultipleRoutes = {
    codigo: `
    //app.module.ts
    {path: 'followers/:id/:username', component: PerfilComponent },

    //followers.component.html
    <a [routerLink]="['/followers', follower.id, follower.login]" > {{ follower.login }} </a>
    `,
    titulo: 'Código 2 - Múltiplas rotas',
    pagina: 'diversas'
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
