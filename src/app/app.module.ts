import { ErrorHandler, NgModule } from '@angular/core';
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

const routes : Routes = [  
  {path: 'followers/:id/:username', component: PerfilComponent },
  {path: 'followers', component: FollowersComponent },      
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
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
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
