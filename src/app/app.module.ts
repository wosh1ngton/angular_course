import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { DirectiveService } from './directives/directive.service';
import { DirectivesComponent } from './directives/directives.component';

//Esta classe está decorada com uma decorator funcion chamada NgModule, sinalizando que trata-se de um módulo angular
@NgModule({
  //Na propriedade declarations, colocamos os componentes que fazem parte do módulo
  declarations: [
    AppComponent,
    CoursesComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DirectiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
