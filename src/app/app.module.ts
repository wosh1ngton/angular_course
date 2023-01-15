import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    NgifComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DirectiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
