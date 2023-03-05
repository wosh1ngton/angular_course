import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundColor = environment.backgroundNavColor;  

  constructor(private route: ActivatedRoute, private router: Router) { }

  menuEscolhido = '';
  viewMode = '';

  updateViewMode(valor: string) {
    this.viewMode = valor;
    console.log('teste ' + this.viewMode);
  }

  title = 'angular-course';
  post = {
    title: "title",
    isFavorite: false
  }
  courses: number[] = [];

  tweet = {
    post: "exemplo de tweet",
    isLiked: true,
    totalLikes: 0
  };
  totalCursos = this.courses.length;

  nomeInput = "nomeTeste";

  onKeyUp(valor: string) {
    const numberValue = Number(valor)
    this.courses = [];
    if (numberValue > 0)
      this.courses.push(numberValue);
  }

}
