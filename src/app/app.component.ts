import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuEscolhido = 'Diretivas';

  viewMode = 'if';
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
    <div *ngIf="courses.length > 0" class="bg-primary">  
      Lista de Cursos
    </div>

    <div *ngIf="courses.length == 0" class="bg-danger">
      Ainda não há cursos
    </div>
  `

  textoHtmlIfNGTemplate = `
    <div *ngIf="courses.length > 0; then coursesList else noCourses"> </div>

    <ng-template #coursesList>
      Lista de Cursos
    </ng-template>

    <ng-template #noCourses>
      Nenhum curso
    </ng-template>
  `
  onKeyUp(valor:string) {
    var numberValue = Number(valor)
    this.courses.push(numberValue);
  }
}
