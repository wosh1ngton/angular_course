import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { DirectiveService } from './directives/directive.service';
import { DirectivesComponent } from './directives/directives.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { ExemploSharingDataComponent } from './exemplo-sharing-data/exemplo-sharing-data.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { NgifComponent } from './ngif/ngif.component';
import { SubmenusComponent } from './submenus/submenus.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SelectboComponent } from './selectbo/selectbo.component';
import { SelectBox2Component } from './select-box2/select-box2.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CoderComponent } from './coder/coder.component';
import { GeradorObjetosComponent } from './gerador-objetos/gerador-objetos.component';
import { PostComponent } from './post/post.component';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { DiretivaPageComponent } from './diretiva-page/diretiva-page.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { ComponentPageComponent } from './component-page/component-page.component';
import { VisaoGeralComponentComponent } from './visao-geral-component/visao-geral-component.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { SharingDataComponent } from './sharing-data/sharing-data.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveDrivenComponent } from './reactive-driven/reactive-driven.component';
import { RotaComponent } from './rota/rota.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { OutrosPageComponent } from './outros-page/outros-page.component';
import { ServicesComponent } from './services/services.component';
import { ValidacaoPageComponent } from './validacao-page/validacao-page.component';
import { NgformPageComponent } from './ngform-page/ngform-page.component';
import { NgvaluePageComponent } from './ngvalue-page/ngvalue-page.component';
import { ReactiveDrivenOverviewComponent } from './reactive-driven-overview/reactive-driven-overview.component';
import { ValidacaoRdComponent } from './validacao-rd/validacao-rd.component';
import { ValidacaoAssincronaComponent } from './validacao-assincrona/validacao-assincrona.component';
import { ValidacaoFromComponent } from './validacao-from/validacao-from.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { HttpGetComponent } from './http-get/http-get.component';
import { HttpPostComponent } from './http-post/http-post.component';
import { HttpPatchComponent } from './http-patch/http-patch.component';
import { HttpDeleteComponent } from './http-delete/http-delete.component';
import { DataServiceComponent } from './data-service/data-service.component';
import { OverviewRotasComponent } from './overview-rotas/overview-rotas.component';
import { InfoRotasComponent } from './info-rotas/info-rotas.component';
import { ParamRotasComponent } from './param-rotas/param-rotas.component';
import { OverviewAuthComponent } from './overview-auth/overview-auth.component';
import { ClienteAuthComponent } from './cliente-auth/cliente-auth.component';
import { ServidorAuthComponent } from './servidor-auth/servidor-auth.component';
import { AutorizacaoComponent } from './autorizacao/autorizacao.component';
import { OperacaoAssincronaComponent } from './operacao-assincrona/operacao-assincrona.component';
import { DiComponent } from './di/di.component';
import { ObservableComponent } from './observable/observable.component';
import { PromisseComponent } from './promisse/promisse.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { TratamentoDeErrosComponent } from './tratamento-de-erros/tratamento-de-erros.component';
import { DeployComponent } from './deploy/deploy.component';
import { AnimationsPageComponent } from './animations-page/animations-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes : Routes = [  
  {path: '', component: HomeComponent },
  {path: 'diretivas', component: DiretivaPageComponent,
    children: [
      {path: 'if', component: NgifComponent },
      {path: 'switch', component: NgSwitchComponent },
      {path: 'for', component: NgForComponent },
      {path: 'ngclasse', component: NgClassComponent },
      {path: 'ngestilo', component: NgStyleComponent },
      {path: '', redirectTo: 'if', pathMatch: 'full'}
    ]
  },  
  {path: 'componentes', component: ComponentPageComponent,
    children : [
      {path: 'overview', component: VisaoGeralComponentComponent },
      {path: 'viewencapsualtion', component: ViewEncapsulationComponent },
      {path: 'sharingdata', component: SharingDataComponent },
      {path: 'animations', component: AnimationsPageComponent },
      {path: '', redirectTo: 'overview', pathMatch: 'full'}
    ] 
  },
  {path: 'template-driven', component: TemplateDrivenComponent,
    children: [
      {path: 'validacao', component: ValidacaoPageComponent},
      {path: 'forms', component: NgformPageComponent},
      {path: 'ng-values', component: NgvaluePageComponent},
      {path: '', redirectTo: 'validacao', pathMatch: 'full'}
    ]
  },
  {path: 'reactive-driven', component: ReactiveDrivenComponent,
    children: [
      {path: 'visaogeral', component: ReactiveDrivenOverviewComponent },
      {path: 'validacaoCustomizada', component: ValidacaoRdComponent },
      {path: 'validacaoAssincrona', component: ValidacaoAssincronaComponent },
      {path: 'validacaoForm', component: ValidacaoFromComponent },
      {path: 'FormArray', component: FormArrayComponent },
      {path: 'FormBuilder', component: FormBuilderComponent },
      {path: '', redirectTo: 'visaogeral', pathMatch: 'full'}
    ]
  },
  {path: 'services', component: ServicesComponent,
    children: [
      {path: 'servicos', component: ServicesOverviewComponent},
      {path: 'get', component: HttpGetComponent},
      {path: 'post', component: HttpPostComponent},
      {path: 'patch', component: HttpPatchComponent},
      {path: 'delete', component: HttpDeleteComponent},
      {path: 'dataservice', component: DataServiceComponent},
      {path: '', redirectTo: 'servicos', pathMatch: 'full'}

    ]
  },
  {path: 'rotas', component: RotaComponent,
    children: [
      {path: 'geral', component: OverviewRotasComponent,
        children: [
          {path: 'followers/:id', component: PerfilComponent },
          {path: 'followers', component: FollowersComponent },  
          {path: 'posts', component: PostComponent}    
        ]
      },
      {path: 'ordem', component: InfoRotasComponent},
      {path: 'querystring', component: ParamRotasComponent},
      {path: '', redirectTo: 'geral', pathMatch: 'full'}
    ]
  },
  {path: 'autenticacao', component: AutenticacaoComponent,
    children: [
      {path: 'visaogeral', component: OverviewAuthComponent},
      {path: 'cliente', component: ClienteAuthComponent},
      {path: 'servidor', component: ServidorAuthComponent},
      {path: 'autorizacao', component: AutorizacaoComponent},
      {path: '', redirectTo: 'visaogeral', pathMatch: 'full'}
    ]
  },
  {path: 'outros', component: OutrosPageComponent,
    children: [
      {path: 'ajax', component: OperacaoAssincronaComponent},
      {path: 'injecao', component: DiComponent},
      {path: 'observables', component: ObservableComponent},
      {path: 'promisse', component: PromisseComponent},
      {path: 'lifecycle', component: CicloDeVidaComponent},
      {path: 'erros', component: TratamentoDeErrosComponent},
      {path: 'deploy', component: DeployComponent},
      {path: '', redirectTo: 'ajax', pathMatch: 'full'}
    ]
  },
 
  {path: 'posts', component: PostComponent },  
  {path: 'archive/:year/:month', component: ArchiveComponent },
  {path: 'archive', component: ArchiveComponent},  
  {path: 'no-access', component: NoAccessComponent},
  {path: '**', component: NotFoundComponent },
]
//Esta classe está decorada com uma decorator funcion chamada NgModule, sinalizando que trata-se de um módulo angular
@NgModule({
  //Na propriedade declarations, colocamos os componentes que fazem parte do módulo
  declarations: [
    AppComponent,
    CoursesComponent,
    DirectivesComponent,
    PipeExampleComponent,
    SummaryPipe,
    FavoriteComponent,
    ExemploSharingDataComponent,
    PanelComponent,
    LikeComponent,
    NgifComponent,
    SubmenusComponent,
    InputTextComponent,
    ContactFormComponent,
    SelectboComponent,
    SelectBox2Component,
    SignupFormComponent,
    CoderComponent,
    GeradorObjetosComponent,
    PostComponent,
    FollowersComponent,
    PerfilComponent,
    ArchiveComponent,
    NoAccessComponent,
    DiretivaPageComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    ComponentPageComponent,
    VisaoGeralComponentComponent,
    ViewEncapsulationComponent,
    SharingDataComponent,
    TemplateDrivenComponent,
    ReactiveDrivenComponent,
    RotaComponent,
    AutenticacaoComponent,
    OutrosPageComponent,
    ServicesComponent,
    ValidacaoPageComponent,
    NgformPageComponent,
    NgvaluePageComponent,
    ReactiveDrivenOverviewComponent,
    ValidacaoRdComponent,
    ValidacaoAssincronaComponent,
    ValidacaoFromComponent,
    FormArrayComponent,
    FormBuilderComponent,
    ServicesOverviewComponent,
    HttpGetComponent,
    HttpPostComponent,
    HttpPatchComponent,
    HttpDeleteComponent,
    DataServiceComponent,
    OverviewRotasComponent,
    InfoRotasComponent,
    ParamRotasComponent,
    OverviewAuthComponent,
    ClienteAuthComponent,
    ServidorAuthComponent,
    AutorizacaoComponent,
    OperacaoAssincronaComponent,
    DiComponent,
    ObservableComponent,
    PromisseComponent,
    CicloDeVidaComponent,
    TratamentoDeErrosComponent,
    DeployComponent,
    AnimationsPageComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DirectiveService,    
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
